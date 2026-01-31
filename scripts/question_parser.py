"""
Question Parser - Extracts questions and choices from questions.pdf
"""
import fitz
import re


def parse_questions(pdf_path):
    """
    Parse questions from PDF, extracting text only.
    
    Note: Images are NOT extracted here. Use image_extractor_v2.py to render
    full pages for manual cropping reference.
    
    Args:
        pdf_path: Path to questions.pdf
        
    Returns:
        list: List of question dicts with structure:
              [{
                  'number': int,
                  'text': str,
                  'choices': {'a': str, 'b': str, 'c': str, 'd': str},
                  'page': int
              }, ...]
    """
    doc = fitz.open(pdf_path)
    
    # Extract all text from document
    print("Extracting text from PDF...")
    full_text = ""
    page_boundaries = {}  # Track which page each question appears on
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        page_text = page.get_text()
        
        # Track position in full_text for page mapping
        start_pos = len(full_text)
        full_text += page_text + "\n"
        end_pos = len(full_text)
        page_boundaries[page_num + 1] = (start_pos, end_pos)
    
    doc.close()
    
    # Parse questions from text
    print("Parsing questions...")
    questions = parse_questions_from_text(full_text, page_boundaries)
    
    print(f"✓ Parsed {len(questions)} questions")
    return questions


def parse_questions_from_text(text, page_boundaries):
    """
    Parse questions from extracted text using regex patterns.
    
    Args:
        text: Full text extracted from PDF
        page_boundaries: Dict mapping page numbers to text positions
        
    Returns:
        list: Parsed questions
    """
    questions = []
    
    # Pattern to match question start: Q followed by number and period
    # e.g., "Q1.", "Q2.", "Q100."
    question_pattern = r'Q(\d+)\.\s+'
    
    # Find all question positions
    matches = list(re.finditer(question_pattern, text))
    
    for i, match in enumerate(matches):
        q_num = int(match.group(1))
        q_start = match.end()  # Start after "Q#. "
        
        # End of this question is start of next question (or end of text)
        if i + 1 < len(matches):
            q_end = matches[i + 1].start()
        else:
            q_end = len(text)
        
        # Extract question text
        q_text = text[q_start:q_end].strip()
        
        # Determine page number
        page_num = get_page_for_position(match.start(), page_boundaries)
        
        # Parse choices
        choices = parse_choices(q_text)
        
        # Remove choices from question text to get clean question
        clean_question = remove_choices_from_text(q_text, choices)
        
        questions.append({
            'number': q_num,
            'text': clean_question.strip(),
            'choices': choices,
            'page': page_num
        })
    
    # Deduplicate questions with same number (keep the one with more/better choices)
    questions = deduplicate_questions(questions)
    
    return questions


def deduplicate_questions(questions):
    """
    Remove duplicate question numbers, keeping the best version.
    
    Strategy:
    - If same question number appears multiple times, keep the one with:
      1. More complete choices (4 choices preferred)
      2. Or the later occurrence (usually the actual exam question)
    
    Args:
        questions: List of question dicts
        
    Returns:
        list: Deduplicated questions
    """
    from collections import defaultdict
    
    # Group by question number
    by_number = defaultdict(list)
    for q in questions:
        by_number[q['number']].append(q)
    
    deduplicated = []
    
    for q_num in sorted(by_number.keys()):
        candidates = by_number[q_num]
        
        if len(candidates) == 1:
            deduplicated.append(candidates[0])
        else:
            # Multiple questions with same number - pick best one
            # Priority: 4 choices > 3 choices > 2 choices > 1 choice
            # If tied, pick the later one (usually the actual question)
            best = max(candidates, key=lambda q: (len(q['choices']), candidates.index(q)))
            deduplicated.append(best)
            
            # Log warning about duplicate
            print(f"⚠ Warning: Found {len(candidates)} instances of Q{q_num}, keeping the one with {len(best['choices'])} choices")
    
    return deduplicated


def parse_choices(text):
    """
    Extract multiple choice options from question text.
    
    Args:
        text: Question text containing choices
        
    Returns:
        dict: {'a': str, 'b': str, 'c': str, 'd': str} or empty dict
    """
    choices = {}
    
    # Pattern to match choices: a), b), c), d) followed by text
    # Handles newlines and whitespace
    choice_pattern = r'([a-d])\)\s+(.+?)(?=(?:[a-d]\)|$))'
    
    matches = re.findall(choice_pattern, text, re.DOTALL | re.IGNORECASE)
    
    for letter, choice_text in matches:
        # Clean up choice text (remove extra whitespace, newlines)
        cleaned = ' '.join(choice_text.strip().split())
        choices[letter.lower()] = cleaned
    
    return choices


def remove_choices_from_text(text, choices):
    """
    Remove choice options from question text to get clean question.
    
    Args:
        text: Full question text with choices
        choices: Parsed choices dict
        
    Returns:
        str: Question text without choices
    """
    if not choices:
        return text
    
    # Find the position of the first choice
    for letter in ['a', 'b', 'c', 'd']:
        pattern = rf'\b{letter}\)\s+'
        match = re.search(pattern, text, re.IGNORECASE)
        if match:
            # Everything before first choice is the question
            return text[:match.start()].strip()
    
    return text


def get_page_for_position(position, page_boundaries):
    """
    Determine which page a text position belongs to.
    
    Args:
        position: Character position in full text
        page_boundaries: Dict of {page_num: (start_pos, end_pos)}
        
    Returns:
        int: Page number
    """
    for page_num, (start, end) in page_boundaries.items():
        if start <= position < end:
            return page_num
    
    return 1  # Default to page 1 if not found


if __name__ == "__main__":
    from pathlib import Path
    
    # Resolve paths relative to script location
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    data_dir = project_root / "data"
    output_dir = project_root / "output" / "images"
    
    # Test parser
    questions = parse_questions(str(data_dir / "questions.pdf"), str(output_dir))
    
    print(f"\nFirst 3 questions:")
    for q in questions[:3]:
        print(f"\n--- Q{q['number']} (Page {q['page']}) ---")
        print(f"Text: {q['text'][:100]}...")
        print(f"Choices: {list(q['choices'].keys())}")
        print(f"Images: {len(q['images'])}")
