"""
PhilNITS QA Mapper - Unified Extraction & Visual Content Pipeline

This pipeline handles the complete workflow for converting exam PDFs into 
web-ready JSON format with visual content integration.

WORKFLOW:
=========
Phase 1: parse-questions
    - Extracts questions and answers from PDF files
    - Generates preliminary JSON (no visuals yet)
    - Renders full PDF pages for manual diagram cropping
    - Outputs to temp/ directory

MANUAL STEP: Crop diagrams from rendered pages
    - Review rendered pages in temp/rendered_pages/
    - Crop relevant diagrams based on question needs
    - Place in public/Files/{year}/ organized by type

Phase 2: add-visuals
    - Scans for cropped diagrams in public/Files/{year}/
    - Validates visual content mapping
    - Injects diagram references into webapp JSON
    - Generates final app/assets/data/{year}/index.json

USAGE:
======
    # Phase 1: Extract questions from PDFs
    python pipeline.py parse-questions --year 2025
    
    # MANUAL: Crop diagrams (see detailed instructions in console output)
    
    # Phase 2: Add visual content to questions
    python pipeline.py add-visuals --year 2025
    
OPTIONS:
========
    --skip-rendering      Skip PDF page rendering (if already done)
    --validate-only       Validate visual content without modifying JSON
    --verbose             Show detailed debug output

EXAMPLES:
=========
    # First time setup for 2025 exams
    python pipeline.py parse-questions --year 2025
    
    # After cropping diagrams
    python pipeline.py add-visuals --year 2025
    
    # Validate visual content without writing files
    python pipeline.py add-visuals --year 2025 --validate-only
"""

import sys
import json
import argparse
from pathlib import Path
from datetime import datetime

# Import extraction and processing modules
from answer_parser import parse_answer_key, validate_answers
from question_parser import parse_questions
from mapper import map_questions_to_answers, generate_webapp_output, generate_json_output
from image_extractor import extract_images_by_rendering
from validate_visual_content import VisualContentAuditor
from inject_visual_content import inject_question_diagrams, inject_choice_diagrams, inject_fill_in_blanks


# ============================================================================
# CONFIGURATION & PATH SETUP
# ============================================================================

def setup_paths():
    """
    Configure all paths relative to philnits/ directory.
    
    Returns:
        dict: Dictionary of all project paths
    """
    # Get philnits/ directory (parent of scripts/)
    base_dir = Path(__file__).parent.parent
    
    paths = {
        'base': base_dir,
        'data': base_dir / 'data',
        'temp': base_dir / 'temp',
        'scripts': base_dir / 'scripts',
        'webapp_data': base_dir / 'app' / 'assets' / 'data',
        'public_files': base_dir / 'public' / 'Files',
        'rendered_pages': base_dir / 'temp' / 'rendered_pages'
    }
    
    return paths


def create_year_directories(year, paths):
    """
    Auto-create all necessary directories for a given year.
    
    Creates:
        - philnits/data/{year}/                     (for input PDFs)
        - philnits/public/Files/{year}/            (for visual content)
        - philnits/public/Files/{year}/question_diagrams/
        - philnits/public/Files/{year}/choices/
        - philnits/public/Files/{year}/fill_in_the_blanks/
        - philnits/app/assets/data/{year}/         (for final JSON)
        - philnits/temp/                           (for processing files)
        - philnits/temp/rendered_pages/            (for PDF pages)
    
    Args:
        year: Exam year (e.g., 2025)
        paths: Dictionary from setup_paths()
    """
    # Input directories
    year_data_dir = paths['data'] / str(year)
    year_data_dir.mkdir(parents=True, exist_ok=True)
    
    # Visual content directories (all 3 categories)
    visual_base = paths['public_files'] / str(year)
    (visual_base / 'question_diagrams').mkdir(parents=True, exist_ok=True)
    (visual_base / 'choices').mkdir(parents=True, exist_ok=True)
    (visual_base / 'fill_in_the_blanks').mkdir(parents=True, exist_ok=True)
    
    # Final output directory
    final_output_dir = paths['webapp_data'] / str(year)
    final_output_dir.mkdir(parents=True, exist_ok=True)
    
    # Processing directories
    paths['temp'].mkdir(parents=True, exist_ok=True)
    paths['rendered_pages'].mkdir(parents=True, exist_ok=True)
    
    # Log what was created
    print_info(f"✓ Created directory structure for {year}:")
    print_info(f"  • Data: {year_data_dir.relative_to(paths['base'])}")
    print_info(f"  • Visual content: {visual_base.relative_to(paths['base'])} (3 categories)")
    print_info(f"  • Final output: {final_output_dir.relative_to(paths['base'])}")
    print_info(f"  • Processing: temp/ and temp/rendered_pages/")


# ============================================================================
# CONSOLE OUTPUT UTILITIES
# ============================================================================

def print_header(title):
    """Print a formatted section header."""
    print()
    print("=" * 80)
    print(f"  {title}")
    print("=" * 80)
    print()


def print_step(step_name):
    """Print a step indicator."""
    print()
    print(f">>> {step_name}")
    print("-" * 80)


def print_success(message):
    """Print a success message."""
    print(f"✓ {message}")


def print_warning(message):
    """Print a warning message."""
    print(f"WARNING : {message}")


def print_error(message):
    """Print an error message."""
    print(f"✗ ERROR: {message}")


def print_info(message):
    """Print an informational message."""
    print(f"ℹ  {message}")


# ============================================================================
# DEBUG UTILITIES
# ============================================================================

def print_debug(message, verbose=False):
    """Print debug message only in verbose mode."""
    if verbose:
        print(f"🔍 DEBUG: {message}")


def log_file_info(filepath, verbose=False):
    """Log file information in debug mode."""
    if verbose and filepath.exists():
        size_mb = filepath.stat().st_size / (1024 * 1024)
        print_debug(f"File: {filepath.name} ({size_mb:.2f} MB)")
        return size_mb
    return 0


def log_processing_time(start_time, operation_name, verbose=False):
    """Log processing time in debug mode."""
    if verbose:
        elapsed = datetime.now() - start_time
        print_debug(f"{operation_name} completed in {elapsed.total_seconds():.2f}s")


# ============================================================================
# PHASE 1: PARSE QUESTIONS FROM PDFS
# ============================================================================

def phase1_parse_questions(year, skip_rendering=False, verbose=False):
    """
    Phase 1: Extract questions and answers from PDF files.
    
    Steps:
        1. Parse answer key from answers.pdf
        2. Extract questions from questions.pdf
        3. Map questions to answers
        4. Generate preliminary webapp JSON (no visuals)
        5. Render PDF pages for manual cropping reference
    
    Args:
        year: Exam year (e.g., 2025)
        skip_rendering: If True, skip PDF page rendering
        verbose: If True, show detailed output
    
    Returns:
        bool: True if successful, False otherwise
    """
    print_header(f"PHASE 1: PARSE QUESTIONS ({year})")
    
    paths = setup_paths()
    
    # ========================================================================
    # Step 0: Create Year Directory Structure
    # ========================================================================
    print_step("Step 0: Setting up Directory Structure")
    create_year_directories(year, paths)
    print()
    
    # Define input/output paths (organized by year)
    year_data_dir = paths['data'] / str(year)
    questions_pdf = year_data_dir / 'questions.pdf'
    answers_pdf = year_data_dir / 'answers.pdf'
    temp_dir = paths['temp']
    rendered_pages_dir = paths['rendered_pages']
    
    # Output files
    qa_mapping_json = temp_dir / 'qa_mapping.json'
    webapp_json = temp_dir / f'webapp_questions_{year}.json'
    
    # ========================================================================
    # Step 1: Validate Input Files
    # ========================================================================
    print_step("Step 1: Validating Input Files")
    
    if not questions_pdf.exists():
        print_error(f"Questions PDF not found: {questions_pdf}")
        print_info(f"📁 Directory ready: {year_data_dir.relative_to(paths['base'])}")
        print_info(f"📄 Please place your questions.pdf there and run again")
        return False
    print_success(f"Found questions PDF: {questions_pdf.name}")
    
    if not answers_pdf.exists():
        print_error(f"Answers PDF not found: {answers_pdf}")
        print_info(f"📁 Directory ready: {year_data_dir.relative_to(paths['base'])}")
        print_info(f"📄 Please place your answers.pdf there and run again")
        return False
    print_success(f"Found answers PDF: {answers_pdf.name}")
    
    # ========================================================================
    # Step 2: Parse Answer Key
    # ========================================================================
    print_step("Step 2: Parsing Answer Key")
    
    try:
        step_start = datetime.now()
        print_debug(f"Starting answer key parsing: {answers_pdf.name}", verbose)
        log_file_info(answers_pdf, verbose)
        
        answers = parse_answer_key(str(answers_pdf))
        print_success(f"Parsed {len(answers)} answers from answer key")
        log_processing_time(step_start, "Answer key parsing", verbose)
        
        # Validate completeness
        validate_answers(answers, expected_count=100)
        
        if verbose:
            # Show first few answers as sample
            sample_answers = dict(list(answers.items())[:5])
            print_debug(f"Sample answers: {sample_answers}", verbose)
        
    except Exception as e:
        print_error(f"Failed to parse answer key: {e}")
        if verbose:
            import traceback
            traceback.print_exc()
        return False
    
    # ========================================================================
    # Step 3: Extract Questions from PDF
    # ========================================================================
    print_step("Step 3: Extracting Questions from PDF")
    
    try:
        step_start = datetime.now()
        print_debug(f"Starting question parsing: {questions_pdf.name}", verbose)
        log_file_info(questions_pdf, verbose)
        
        questions = parse_questions(str(questions_pdf))
        print_success(f"Extracted {len(questions)} questions from PDF")
        log_processing_time(step_start, "Question parsing", verbose)
        
        if len(questions) == 0:
            print_warning("No questions found in PDF - check PDF format")
            return False
            
        if verbose:
            # Show question distribution by page
            page_counts = {}
            for q in questions:
                page = q.get('page', 'unknown')
                page_counts[page] = page_counts.get(page, 0) + 1
            print_debug(f"Questions per page: {dict(sorted(page_counts.items()))}", verbose)
            
    except Exception as e:
        print_error(f"Failed to extract questions: {e}")
        if verbose:
            import traceback
            traceback.print_exc()
        return False
    
    # ========================================================================
    # Step 4: Map Questions to Answers
    # ========================================================================
    print_step("Step 4: Mapping Questions to Answers")
    
    try:
        mapped_questions = map_questions_to_answers(questions, answers)
        print_success(f"Mapped {len(mapped_questions)} questions to answers")
        
        # Check for questions without answers
        missing = [q for q in mapped_questions if q.get('correct_answer') is None]
        if missing:
            print_warning(f"{len(missing)} questions missing correct answers")
            
    except Exception as e:
        print_error(f"Failed to map questions to answers: {e}")
        if verbose:
            import traceback
            traceback.print_exc()
        return False
    
    # ========================================================================
    # Step 5: Generate Preliminary Webapp JSON
    # ========================================================================
    print_step("Step 5: Generating Preliminary Webapp JSON")
    
    try:
        # Create temp directory
        temp_dir.mkdir(parents=True, exist_ok=True)
        
        # Safety validation before JSON generation
        if len(mapped_questions) == 0:
            print_error("No questions to generate JSON from")
            return False
            
        questions_with_answers = [q for q in mapped_questions if q.get('correct_answer')]
        if len(questions_with_answers) < len(mapped_questions) * 0.8:  # 80% threshold
            print_warning(f"Only {len(questions_with_answers)}/{len(mapped_questions)} questions have answers")
            print_warning("Consider checking your answer key PDF")
        
        print_debug(f"Generating JSON with {len(mapped_questions)} questions", verbose)
        
        # Generate webapp JSON (without visual content)
        generate_webapp_output(
            questions=mapped_questions,
            output_path=str(webapp_json),
            year=year,
            exam_code="FE-A"
        )
        
        # Also generate debug JSON for reference
        generate_json_output(mapped_questions, str(qa_mapping_json))
        
        # Log file sizes in debug mode
        log_file_info(webapp_json, verbose)
        log_file_info(qa_mapping_json, verbose)
        
        print_success(f"Generated: {webapp_json.relative_to(paths['base'])}")
        print_success(f"Generated: {qa_mapping_json.relative_to(paths['base'])}")
        print_warning("Note: These files do NOT include visual content yet")
        
    except Exception as e:
        print_error(f"Failed to generate JSON: {e}")
        if verbose:
            import traceback
            traceback.print_exc()
        return False
    
    # ========================================================================
    # Step 6: Render PDF Pages for Manual Cropping
    # ========================================================================
    if not skip_rendering:
        print_step("Step 6: Rendering PDF Pages for Manual Cropping")
        
        try:
            # Create output directory
            rendered_pages_dir.mkdir(parents=True, exist_ok=True)
            
            # Render pages starting from page 3 (skip cover pages)
            # Use 200 DPI for reasonable quality without huge files
            print_info("Rendering pages 3+ at 200 DPI (this may take 1-2 minutes)...")
            rendered_pages = extract_images_by_rendering(
                pdf_path=str(questions_pdf),
                output_dir=str(rendered_pages_dir),
                start_page=3,
                dpi=200
            )
            
            print_success(f"Rendered {len(rendered_pages)} pages to {rendered_pages_dir.relative_to(paths['base'])}")
            print_info("Use these rendered pages as reference for manual diagram cropping")
            
        except Exception as e:
            print_error(f"Failed to render pages: {e}")
            if verbose:
                import traceback
                traceback.print_exc()
            print_warning("Continuing without rendered pages - you may need existing images")
            # Don't fail the entire pipeline for rendering errors
    else:
        print_step("Step 6: Skipping PDF Rendering (--skip-rendering flag)")
    
    # ========================================================================
    # Phase 1 Complete - Show Next Steps
    # ========================================================================
    print_phase1_completion_guide(year, paths, skip_rendering)
    
    return True


def print_phase1_completion_guide(year, paths, rendering_skipped):
    """
    Print comprehensive guidance for manual cropping step.
    
    Args:
        year: Exam year
        paths: Dictionary of project paths
        rendering_skipped: Whether rendering was skipped
    """
    print()
    print("=" * 80)
    print("  ✓ PHASE 1 COMPLETE: Questions Extracted")
    print("=" * 80)
    print()
    
    # Summary
    print("WHAT WAS GENERATED:")
    print("-" * 80)
    print(f"  • temp/qa_mapping.json              (Debug format with raw extracted data)")
    print(f"  • temp/webapp_questions_{year}.json  (Preliminary JSON, NO visual content)")
    if not rendering_skipped:
        print(f"  • temp/rendered_pages/              (Full PDF pages for cropping reference)")
    print()
    
    # Next steps
    print("=" * 80)
    print("  ⏸️  NEXT STEP: MANUAL DIAGRAM CROPPING")
    print("=" * 80)
    print()
    print("You must now manually crop diagrams from the rendered PDF pages.")
    print("This requires human judgment to determine which questions need visual content.")
    print()
    
    # Three types of visual content
    print("THREE TYPES OF VISUAL CONTENT:")
    print("-" * 80)
    print()
    
    print("1. QUESTION DIAGRAMS")
    print("   When to use:")
    print("     • Question text references a diagram, figure, table, or chart")
    print("     • Question mentions 'as shown above/below', 'in the figure', etc.")
    print("     • Visual context is needed to understand the question")
    print()
    print("   Where to save:")
    print(f"     public/Files/{year}/question_diagrams/{year}-{{question_num}}.png")
    print()
    print("   Example:")
    print("     Q1 references 'boxes with inputs' → Crop the diagram")
    print(f"     Save as: question_diagrams/{year}-1.png")
    print()
    
    print("2. CHOICE IMAGES (Answer choices are diagrams)")
    print("   When to use:")
    print("     • Answer choices A/B/C/D are network diagrams, flowcharts, or images")
    print("     • Text parsing captured 'A', 'B', 'C', 'D' but choices are actually visual")
    print("     • Question asks 'which of the following diagrams...'")
    print()
    print("   Where to save:")
    print(f"     public/Files/{year}/choices/{year}-{{question_num}}.png")
    print()
    print("   Example:")
    print("     Q30 has 4 network topology diagrams as answer choices")
    print(f"     Save as: choices/{year}-30.png")
    print()
    
    print("3. COMPOSITE IMAGES (Full question + choices as one image)")
    print("   When to use:")
    print("     • Fill-in-the-blank questions with boxes/underscores in diagrams")
    print("     • Question text parsing FAILED due to complex layout with embedded boxes")
    print("     • Tables with blank cells that need to be filled")
    print("     • The ENTIRE question (text + choices) must be shown as image")
    print()
    print("   Where to save:")
    print(f"     public/Files/{year}/fill_in_the_blanks/{year}-{{question_num}}.png")
    print()
    print("   Example:")
    print("     Q7 has code blocks with ___A___, ___B___, ___C___ blanks")
    print("     Text parser captured it wrong → Crop entire question + choices")
    print(f"     Save as: fill_in_the_blanks/{year}-7.png")
    print()
    
    # Important notes
    print("=" * 80)
    print("  📋 IMPORTANT NOTES")
    print("=" * 80)
    print()
    print("• File naming: MUST be {year}-{question_number}.png (e.g., 2025-1.png)")
    print("• Use PNG format for best quality")
    print("• Crop cleanly - include only the relevant diagram/content")
    print("• Reference temp/qa_mapping.json to see which questions exist")
    print("• Not every question needs visual content - only crop when necessary")
    print("• You can use your previous year's data as a guide (2025_backup/)")
    print()
    
    # File organization
    print("EXPECTED FILE STRUCTURE AFTER CROPPING:")
    print("-" * 80)
    print(f"public/Files/{year}/")
    print("├── question_diagrams/")
    print(f"│   ├── {year}-1.png")
    print(f"│   ├── {year}-3.png")
    print(f"│   ├── {year}-6.png")
    print("│   └── ...")
    print("├── choices/")
    print(f"│   ├── {year}-30.png")
    print(f"│   ├── {year}-42.png")
    print("│   └── ...")
    print("└── fill_in_the_blanks/")
    print(f"    ├── {year}-7.png")
    print(f"    ├── {year}-10.png")
    print("    └── ...")
    print()
    
    # What to do next
    print("=" * 80)
    print("  🚀 WHEN CROPPING IS DONE")
    print("=" * 80)
    print()
    print("After you've cropped all necessary diagrams, run Phase 2:")
    print()
    print(f"    python pipeline.py add-visuals --year {year}")
    print()
    print("This will:")
    print("  • Scan your cropped images")
    print("  • Validate the visual content mapping")
    print("  • Inject diagram references into the webapp JSON")
    print(f"  • Generate final: app/assets/data/{year}/index.json")
    print()
    print("=" * 80)


# ============================================================================
# PHASE 2: ADD VISUAL CONTENT
# ============================================================================

def phase2_add_visuals(year, validate_only=False, verbose=False):
    """
    Phase 2: Scan cropped diagrams and inject references into webapp JSON.
    
    Steps:
        1. Scan public/Files/{year}/ for cropped diagrams
        2. Validate visual content (check naming, categorization)
        3. Generate visual content mapping report
        4. Inject diagram references into webapp JSON
        5. Create final app/assets/data/{year}/index.json
    
    Args:
        year: Exam year (e.g., 2025)
        validate_only: If True, only validate without writing files
        verbose: If True, show detailed output
    
    Returns:
        bool: True if successful, False otherwise
    """
    print_header(f"PHASE 2: ADD VISUAL CONTENT ({year})")
    
    paths = setup_paths()
    
    # ========================================================================
    # Step 0: Ensure Directory Structure
    # ========================================================================
    print_step("Step 0: Ensuring Directory Structure")
    create_year_directories(year, paths)
    print()
    
    # Define paths
    temp_dir = paths['temp']
    webapp_json_input = temp_dir / f'webapp_questions_{year}.json'
    images_dir = paths['public_files'] / str(year)
    final_json = paths['webapp_data'] / str(year) / 'index.json'
    
    # ========================================================================
    # Step 1: Validate Prerequisites
    # ========================================================================
    print_step("Step 1: Validating Prerequisites")
    
    if not webapp_json_input.exists():
        print_error(f"Preliminary JSON not found: {webapp_json_input}")
        print_info("Did you run Phase 1 first?")
        print_info(f"Run: python pipeline.py parse-questions --year {year}")
        return False
    print_success(f"Found preliminary JSON: {webapp_json_input.name}")
    
    if not images_dir.exists():
        print_warning(f"Images directory not found: {images_dir}")
        print_info("No visual content will be added (questions will be text-only)")
        print_info("If you intended to add diagrams, create the directory and place images there")
    else:
        print_success(f"Found images directory: {images_dir}")
    
    # ========================================================================
    # Step 2: Scan for Cropped Diagrams
    # ========================================================================
    print_step("Step 2: Scanning for Cropped Diagrams")
    
    try:
        # Initialize auditor and scan all categories
        auditor = VisualContentAuditor(year=year, data_dir=images_dir)
        scan_results = auditor.scan_all_categories()
        
        # Extract counts
        question_diagrams = scan_results['question_diagrams']['images']
        choice_images = scan_results['choices']['images']
        composite_images = scan_results['fill_in_the_blanks']['images']
        
        print()
        print("Visual Content Summary:")
        print(f"  • Question diagrams:       {len(question_diagrams)} found")
        print(f"  • Choice images:           {len(choice_images)} found")
        print(f"  • Composite images:        {len(composite_images)} found")
        print(f"  • Total visual items:      {len(question_diagrams) + len(choice_images) + len(composite_images)}")
        print()
        
    except Exception as e:
        print_error(f"Failed to scan visual content: {e}")
        if verbose:
            import traceback
            traceback.print_exc()
        return False
    
    # ========================================================================
    # Step 3: Validate Visual Content
    # ========================================================================
    print_step("Step 3: Validating Visual Content")
    
    try:
        print_info("Checking file naming conventions...")
        print_info("Verifying image categories...")
        print_info("Detecting duplicate entries...")
        
        validation_errors = []
        validation_warnings = []
        
        # Check for duplicates in each category
        for category_name, category_data in scan_results.items():
            if category_data.get('duplicate_numbers'):
                for dup in category_data['duplicate_numbers']:
                    validation_errors.append(
                        f"{category_name}: Q{dup['question']} has {len(dup['files'])} duplicate files"
                    )
            
            if category_data.get('invalid_files'):
                for invalid in category_data['invalid_files']:
                    validation_warnings.append(
                        f"{category_name}: Invalid filename '{invalid}' (expected format: {year}-##.png)"
                    )
        
        # Check for conflicts (same question in multiple categories)
        conflicts = auditor.detect_conflicts()
        if conflicts:
            for conflict in conflicts:
                cat_a, cat_b = conflict['categories']
                for q_num in conflict['questions']:
                    validation_errors.append(
                        f"Q{q_num} appears in multiple categories: {cat_a}, {cat_b}"
                    )
        
        if validation_errors:
            print_error(f"Found {len(validation_errors)} validation errors:")
            for error in validation_errors[:5]:  # Show first 5
                print(f"    • {error}")
            if len(validation_errors) > 5:
                print(f"    ... and {len(validation_errors) - 5} more")
            return False
        
        if validation_warnings:
            print_warning(f"Found {len(validation_warnings)} warnings:")
            for warning in validation_warnings[:5]:
                print(f"    • {warning}")
        
        print_success("Visual content validation passed")
        
    except Exception as e:
        print_error(f"Validation failed: {e}")
        if verbose:
            import traceback
            traceback.print_exc()
        return False
    
    # ========================================================================
    # Step 4: Inject Visual References
    # ========================================================================
    if not validate_only:
        print_step("Step 4: Injecting Visual References into Webapp JSON")
        
        try:
            # Load preliminary webapp JSON
            with open(webapp_json_input, 'r', encoding='utf-8') as f:
                questions = json.load(f)
            
            print_info(f"Loaded {len(questions)} questions from preliminary JSON")
            
            # Inject each type of visual content
            # Note: mapping structure is { 'mappings': { 'category_name': { 'questions': {...} } } }
            mappings = mapping.get('mappings', {})
            updated_count = 0
            
            # 1. Inject question diagrams (prepend markdown)
            if 'question_diagrams' in mappings:
                questions, count = inject_question_diagrams(questions, mappings['question_diagrams'])
                updated_count += count
                print_info(f"Injected {count} question diagrams")
            
            # 2. Inject choice images (add choiceImage field)
            if 'choices' in mappings:
                questions, count = inject_choice_diagrams(questions, mappings['choices'])
                updated_count += count
                print_info(f"Injected {count} choice images")
            
            # 3. Inject composite images (add compositeImage field)
            if 'fill_in_the_blanks' in mappings:
                questions, count = inject_fill_in_blanks(questions, mappings['fill_in_the_blanks'])
                updated_count += count
                print_info(f"Injected {count} composite images")
            
            print_success(f"Updated {updated_count} questions with visual content")
            
            # Create output directory and save final JSON
            final_json.parent.mkdir(parents=True, exist_ok=True)
            with open(final_json, 'w', encoding='utf-8') as f:
                json.dump(questions, f, indent=2, ensure_ascii=False)
            
            print_success(f"Generated final JSON: {final_json.relative_to(paths['base'])}")
            
        except Exception as e:
            print_error(f"Failed to inject visual content: {e}")
            if verbose:
                import traceback
                traceback.print_exc()
            return False
    else:
        print_step("Step 5: Skipping Injection (--validate-only flag)")
    
    # ========================================================================
    # Phase 2 Complete
    # ========================================================================
    print_phase2_completion_guide(year, paths, validate_only)
    
    return True


def print_phase2_completion_guide(year, paths, validate_only):
    """
    Print completion message for Phase 2.
    
    Args:
        year: Exam year
        paths: Dictionary of project paths
        validate_only: Whether this was validation-only mode
    """
    print()
    print("=" * 80)
    if validate_only:
        print("  ✓ PHASE 2 VALIDATION COMPLETE")
    else:
        print("  ✓ PHASE 2 COMPLETE: Visual Content Added")
    print("=" * 80)
    print()
    
    if validate_only:
        print("VALIDATION RESULTS:")
        print("-" * 80)
        print("  • Visual content mapping validated")
        print("  • No files were modified (--validate-only mode)")
        print()
        print("To actually inject visual content:")
        print(f"    python pipeline.py add-visuals --year {year}")
        print()
    else:
        print("WHAT WAS GENERATED:")
        print("-" * 80)
        print(f"  • app/assets/data/{year}/index.json  (FINAL - Ready for web app)")
        print()
        
        print("=" * 80)
        print("  🎉 SUCCESS - Ready to Use!")
        print("=" * 80)
        print()
        print("Your webapp JSON is now ready with all visual content integrated.")
        print()
        print("NEXT STEPS:")
        print("-" * 80)
        print()
        print("1. OPTIONAL: Add detailed solution explanations")
        print()
        print(f"   Edit: app/assets/data/{year}/index.json")
        print("   - Fill 'solution' field for each question")
        print("   - Use markdown format with KaTeX for math ($...$ or $$...$$)")
        print("   - Include step-by-step explanations (see existing years for examples)")
        print()
        print("   Note: Solutions are optional. Questions work without them,")
        print("         but detailed explanations help students learn.")
        print()
        print("2. Update app/assets/data/index.ts to import the new year:")
        print()
        print(f"   import _{year} from '@/assets/data/{year}/index.json'")
        print()
        print("2. Add to quizData array:")
        print()
        print(f"   export const quizData: QuizQuestion[] = [")
        print(f"     ..._{year},")
        print("     ..._2024,")
        print("     // ... other years")
        print("   ]")
        print()
        print("3. OPTIONAL: Add detailed solution explanations")
        print()
        print(f"   Edit: app/assets/data/{year}/index.json")
        print("   - Fill 'solution' field for each question")
        print("   - Use markdown with KaTeX for math ($...$ or $$...$$)")
        print("   - Include step-by-step explanations")
        print()
        print("   Note: Solutions are optional but help students learn.")
        print()
        print("4. Test in the web app:")
        print()
        print("   npm run dev")
        print("   # or")
        print("   npm run build && npm start")
        print()
        print("5. Verify:")
        print(f"   • Questions from {year} appear in quiz")
        print("   • Diagrams display correctly")
        print("   • Answer validation works")
        print()
        print("=" * 80)


# ============================================================================
# MAIN ENTRY POINT
# ============================================================================

def main():
    """Main entry point for the pipeline."""
    parser = argparse.ArgumentParser(
        description='PhilNITS QA Mapper - Unified Extraction & Visual Content Pipeline',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Phase 1: Extract questions from PDFs (first time for 2025)
  python pipeline.py parse-questions --year 2025
  
  # Phase 1: Skip rendering if you already have rendered pages
  python pipeline.py parse-questions --year 2025 --skip-rendering
  
  # Phase 2: Add visual content after manual cropping (2025 example)
  python pipeline.py add-visuals --year 2025
  
  # Validate visual content without modifying files
  python pipeline.py add-visuals --year 2025 --validate-only
  
  # Verbose mode for debugging
  python pipeline.py parse-questions --year 2025 --verbose
        """
    )
    
    # Subcommands
    subparsers = parser.add_subparsers(dest='command', required=True, help='Pipeline phase')
    
    # Phase 1: parse-questions
    parser_phase1 = subparsers.add_parser(
        'parse-questions',
        help='Phase 1: Extract questions and answers from PDF files'
    )
    parser_phase1.add_argument(
        '--year',
        required=True,
        help='Exam year (e.g., 2025)'
    )
    parser_phase1.add_argument(
        '--skip-rendering',
        action='store_true',
        help='Skip PDF page rendering (if already done)'
    )
    parser_phase1.add_argument(
        '--dry-run',
        action='store_true',
        help='Validate inputs and show what would be done without writing files'
    )
    parser_phase1.add_argument(
        '--verbose',
        action='store_true',
        help='Show detailed debug output'
    )
    
    # Phase 2: add-visuals
    parser_phase2 = subparsers.add_parser(
        'add-visuals',
        help='Phase 2: Add visual content to questions'
    )
    parser_phase2.add_argument(
        '--year',
        required=True,
        help='Exam year (e.g., 2025)'
    )
    parser_phase2.add_argument(
        '--validate-only',
        action='store_true',
        help='Only validate visual content without modifying JSON'
    )
    parser_phase2.add_argument(
        '--verbose',
        action='store_true',
        help='Show detailed debug output'
    )
    
    # Parse arguments
    args = parser.parse_args()
    
    # Print pipeline header
    print()
    print("=" * 80)
    print("  PhilNITS QA Mapper - Extraction & Visual Content Pipeline")
    print("=" * 80)
    print(f"  Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"  Command: {args.command}")
    print(f"  Year: {args.year}")
    print("=" * 80)
    
    # Execute appropriate phase
    try:
        if args.command == 'parse-questions':
            success = phase1_parse_questions(
                year=args.year,
                skip_rendering=args.skip_rendering,
                verbose=args.verbose
            )
        elif args.command == 'add-visuals':
            success = phase2_add_visuals(
                year=args.year,
                validate_only=args.validate_only,
                verbose=args.verbose
            )
        else:
            print_error(f"Unknown command: {args.command}")
            return 1
        
        # Print final status
        print()
        if success:
            print("=" * 80)
            print("  ✓ Pipeline Completed Successfully (Scroll up for additional details and possible next steps.)")
            print("=" * 80)
            return 0
        else:
            print("=" * 80)
            print("  ✗ Pipeline Failed")
            print("=" * 80)
            return 1
            
    except KeyboardInterrupt:
        print()
        print()
        print("=" * 80)
        print("  ⏸️  Pipeline Interrupted by User")
        print("=" * 80)
        return 130
    
    except Exception as e:
        print()
        print_error(f"Unexpected error: {e}")
        if args.verbose:
            import traceback
            print()
            print("Traceback:")
            print("-" * 80)
            traceback.print_exc()
        return 1



if __name__ == '__main__':
    sys.exit(main())
