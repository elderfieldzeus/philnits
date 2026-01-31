"""
Comprehensive Visual Content Validator & Mapper

Validates and maps three types of visual content:
1. Question Diagrams: Standard diagrams referenced in question text
2. Choice Diagrams: Answer choices are visual (network diagrams, etc.)
3. Fill-in-the-Blanks: Full composite images (question + choices together)

Validates numbering consistency and generates comprehensive mapping report.
"""

import json
import re
from pathlib import Path
from typing import Dict, List, Set, Tuple
from collections import defaultdict


class VisualContentAuditor:
    """Audits and validates visual content across all three categories."""
    
    def __init__(self, year: str, data_dir: Path):
        self.year = year
        self.data_dir = data_dir
        
        # Define the three categories
        self.categories = {
            "question_diagrams": {
                "dir": data_dir / "question_diagrams",
                "description": "Standard reference diagrams",
                "field_name": "questionImage"
            },
            "choices": {
                "dir": data_dir / "choices",
                "description": "Answer choices as diagrams",
                "field_name": "choiceImage"
            },
            "fill_in_the_blanks": {
                "dir": data_dir / "fill_in_the_blanks",
                "description": "Full composite (question + choices)",
                "field_name": "compositeImage"
            }
        }
        
        self.results = {}
    
    def scan_category(self, category_name: str) -> Dict:
        """Scan a category directory and extract question numbers."""
        category_info = self.categories[category_name]
        category_dir = category_info["dir"]
        
        result = {
            "category": category_name,
            "description": category_info["description"],
            "directory": str(category_dir),
            "exists": category_dir.exists(),
            "images": {},
            "valid_count": 0,
            "invalid_files": [],
            "duplicate_numbers": [],
            "missing_sequence": []
        }
        
        if not category_dir.exists():
            return result
        
        # Pattern: {year}-{num}.{ext}
        pattern = re.compile(rf"{self.year}-(\d+)\.(png|jpg|jpeg)", re.IGNORECASE)
        
        question_numbers = defaultdict(list)
        
        for image_file in category_dir.iterdir():
            if not image_file.is_file():
                continue
            
            match = pattern.match(image_file.name)
            if match:
                q_num = int(match.group(1))
                question_numbers[q_num].append(image_file.name)
                result["images"][q_num] = {
                    "filename": image_file.name,
                    "path": str(image_file),
                    "size_kb": image_file.stat().st_size / 1024
                }
                result["valid_count"] += 1
            else:
                result["invalid_files"].append(image_file.name)
        
        # Check for duplicates
        for q_num, files in question_numbers.items():
            if len(files) > 1:
                result["duplicate_numbers"].append({
                    "question": q_num,
                    "files": files
                })
        
        # Check sequence continuity (optional - for detecting gaps)
        if question_numbers:
            all_nums = sorted(question_numbers.keys())
            expected_range = range(min(all_nums), max(all_nums) + 1)
            missing = [n for n in expected_range if n not in question_numbers]
            result["missing_sequence"] = missing
        
        return result
    
    def scan_all_categories(self) -> Dict:
        """Scan all three categories."""
        print(f"🔍 Scanning visual content for year {self.year}...\n")
        
        for category_name in self.categories.keys():
            print(f"📂 Scanning: {category_name}")
            result = self.scan_category(category_name)
            self.results[category_name] = result
            
            if result["exists"]:
                print(f"   ✓ Found {result['valid_count']} images")
                if result["invalid_files"]:
                    print(f"   ⚠️  {len(result['invalid_files'])} invalid filenames")
                if result["duplicate_numbers"]:
                    print(f"   ⚠️  {len(result['duplicate_numbers'])} duplicate question numbers")
            else:
                print(f"   ⚠️  Directory not found: {result['directory']}")
            print()
        
        return self.results
    
    def detect_conflicts(self) -> List[Dict]:
        """Detect questions that appear in multiple categories (potential conflicts)."""
        conflicts = []
        
        # Get question numbers from each category
        category_questions = {}
        for cat_name, result in self.results.items():
            if result["exists"]:
                category_questions[cat_name] = set(result["images"].keys())
        
        # Check all pairs for overlaps
        categories = list(category_questions.keys())
        for i in range(len(categories)):
            for j in range(i + 1, len(categories)):
                cat_a = categories[i]
                cat_b = categories[j]
                overlap = category_questions[cat_a] & category_questions[cat_b]
                
                if overlap:
                    conflicts.append({
                        "categories": [cat_a, cat_b],
                        "questions": sorted(list(overlap)),
                        "severity": "error"  # Same question shouldn't be in multiple categories
                    })
        
        return conflicts
    
    def generate_mapping(self, output_path: Path) -> Dict:
        """Generate comprehensive mapping for JSON injection."""
        mapping = {
            "year": self.year,
            "summary": {
                "total_images": sum(r["valid_count"] for r in self.results.values()),
                "by_category": {
                    cat: result["valid_count"]
                    for cat, result in self.results.items()
                }
            },
            "mappings": {}
        }
        
        # Create mapping for each category
        for cat_name, result in self.results.items():
            if result["exists"] and result["images"]:
                category_info = self.categories[cat_name]
                field_name = category_info["field_name"]
                
                mapping["mappings"][cat_name] = {
                    "field_name": field_name,
                    "description": category_info["description"],
                    "questions": {}
                }
                
                for q_num, img_info in result["images"].items():
                    # Generate web-accessible path
                    # Assuming images will be copied to philnits/public/Files/{category}/
                    web_path = f"Files/{cat_name}/{img_info['filename']}"
                    
                    mapping["mappings"][cat_name]["questions"][q_num] = {
                        "web_path": web_path,
                        "filename": img_info["filename"],
                        "size_kb": round(img_info["size_kb"], 2)
                    }
        
        # Save mapping
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(mapping, f, indent=2, ensure_ascii=False)
        
        return mapping
    
    def generate_report(self, output_path: Path, conflicts: List[Dict]):
        """Generate detailed audit report."""
        lines = []
        lines.append("=" * 80)
        lines.append("VISUAL CONTENT AUDIT REPORT")
        lines.append("=" * 80)
        lines.append(f"Year: {self.year}")
        lines.append(f"Audit Date: {Path().resolve()}")
        lines.append("")
        
        # Summary
        lines.append("SUMMARY")
        lines.append("-" * 80)
        total_images = sum(r["valid_count"] for r in self.results.values())
        lines.append(f"Total Valid Images: {total_images}")
        lines.append("")
        
        for cat_name, result in self.results.items():
            status = "✓" if result["exists"] and result["valid_count"] > 0 else "✗"
            lines.append(f"{status} {cat_name:25s}: {result['valid_count']:3d} images")
        lines.append("")
        
        # Detailed breakdown by category
        lines.append("=" * 80)
        lines.append("CATEGORY DETAILS")
        lines.append("=" * 80)
        lines.append("")
        
        for cat_name, result in self.results.items():
            lines.append(f"📂 {cat_name.upper()}")
            lines.append(f"   {result['description']}")
            lines.append("-" * 80)
            
            if not result["exists"]:
                lines.append(f"   ❌ Directory not found: {result['directory']}")
                lines.append("")
                continue
            
            lines.append(f"   Directory: {result['directory']}")
            lines.append(f"   Valid Images: {result['valid_count']}")
            
            if result["images"]:
                q_nums = sorted(result["images"].keys())
                lines.append(f"   Question Range: Q{min(q_nums)} - Q{max(q_nums)}")
                lines.append(f"   Questions: {', '.join(f'Q{n}' for n in q_nums)}")
            
            # Issues
            if result["invalid_files"]:
                lines.append(f"\n   ⚠️  Invalid Filenames ({len(result['invalid_files'])}):")
                for filename in result["invalid_files"]:
                    lines.append(f"      • {filename}")
            
            if result["duplicate_numbers"]:
                lines.append(f"\n   ⚠️  Duplicate Question Numbers ({len(result['duplicate_numbers'])}):")
                for dup in result["duplicate_numbers"]:
                    lines.append(f"      • Q{dup['question']}: {', '.join(dup['files'])}")
            
            if result["missing_sequence"] and len(result["missing_sequence"]) < 20:
                lines.append(f"\n   ℹ️  Gaps in Sequence: {', '.join(f'Q{n}' for n in result['missing_sequence'])}")
            
            lines.append("")
        
        # Conflicts
        if conflicts:
            lines.append("=" * 80)
            lines.append("⚠️  CONFLICTS DETECTED")
            lines.append("=" * 80)
            lines.append("")
            lines.append("The following questions appear in multiple categories:")
            lines.append("(Each question should only be in ONE category)")
            lines.append("")
            
            for conflict in conflicts:
                cat_a, cat_b = conflict["categories"]
                questions = conflict["questions"]
                lines.append(f"❌ {cat_a} ↔ {cat_b}:")
                lines.append(f"   Questions: {', '.join(f'Q{n}' for n in questions)}")
                lines.append("")
        
        # Recommendations
        lines.append("=" * 80)
        lines.append("RECOMMENDATIONS")
        lines.append("=" * 80)
        lines.append("")
        
        if conflicts:
            lines.append("🔴 CRITICAL: Resolve conflicts before proceeding")
            lines.append("   • Move duplicate images to correct category")
            lines.append("   • Delete or rename incorrect duplicates")
            lines.append("")
        
        # Check for invalid files
        has_invalid = any(r["invalid_files"] for r in self.results.values())
        if has_invalid:
            lines.append("⚠️  Fix invalid filenames:")
            lines.append(f"   • Expected format: {self.year}-{{question_num}}.png")
            lines.append("   • Rename or remove files that don't match")
            lines.append("")
        
        # Check for duplicates
        has_dupes = any(r["duplicate_numbers"] for r in self.results.values())
        if has_dupes:
            lines.append("⚠️  Resolve duplicate question numbers:")
            lines.append("   • Keep the correct version")
            lines.append("   • Delete or rename duplicates")
            lines.append("")
        
        if not conflicts and not has_invalid and not has_dupes:
            lines.append("✅ All validations passed!")
            lines.append("")
            lines.append("NEXT STEPS:")
            lines.append(f"1. Copy images to web app directory structure:")
            for cat_name in self.categories.keys():
                lines.append(f"   • {cat_name}/ → philnits/public/Files/{cat_name}/")
            lines.append("2. Run injection script to update webapp JSON")
            lines.append("3. Test in web app")
        
        lines.append("")
        
        report = "\n".join(lines)
        
        # Save report
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(report)
        
        return report


def main():
    import argparse
    
    parser = argparse.ArgumentParser(
        description="Validate and map visual content across all categories"
    )
    parser.add_argument(
        "--year",
        type=str,
        required=True,
        help="Exam year (e.g., 2025)"
    )
    parser.add_argument(
        "--data-dir",
        type=Path,
        default=Path("data"),
        help="Base data directory containing category subdirectories"
    )
    parser.add_argument(
        "--output-report",
        type=Path,
        default=Path("logs/visual_content_audit.txt"),
        help="Output path for audit report"
    )
    parser.add_argument(
        "--output-mapping",
        type=Path,
        default=Path("data/visual_content_mapping.json"),
        help="Output path for JSON mapping file"
    )
    
    args = parser.parse_args()
    
    # Create auditor
    auditor = VisualContentAuditor(args.year, args.data_dir)
    
    # Scan all categories
    results = auditor.scan_all_categories()
    
    # Detect conflicts
    print("🔍 Checking for conflicts...")
    conflicts = auditor.detect_conflicts()
    
    if conflicts:
        print(f"⚠️  Found {len(conflicts)} conflict(s)\n")
    else:
        print("✓ No conflicts detected\n")
    
    # Generate mapping
    print(f"📝 Generating mapping file...")
    mapping = auditor.generate_mapping(args.output_mapping)
    print(f"   Saved to: {args.output_mapping}\n")
    
    # Generate report
    print(f"📄 Generating audit report...")
    report = auditor.generate_report(args.output_report, conflicts)
    print(f"   Saved to: {args.output_report}\n")
    
    # Print summary to console
    print("=" * 80)
    print("VALIDATION COMPLETE")
    print("=" * 80)
    
    total_images = sum(r["valid_count"] for r in results.values())
    print(f"✓ Total Images: {total_images}")
    
    for cat_name, result in results.items():
        if result["exists"]:
            status = "✓" if result["valid_count"] > 0 else "⚠️ "
            print(f"  {status} {cat_name}: {result['valid_count']} images")
    
    print()
    
    # Report issues
    has_issues = False
    
    if conflicts:
        print(f"❌ {len(conflicts)} conflict(s) detected - see report for details")
        has_issues = True
    
    total_invalid = sum(len(r["invalid_files"]) for r in results.values())
    if total_invalid > 0:
        print(f"⚠️  {total_invalid} invalid filename(s) detected")
        has_issues = True
    
    total_dupes = sum(len(r["duplicate_numbers"]) for r in results.values())
    if total_dupes > 0:
        print(f"⚠️  {total_dupes} duplicate question number(s) detected")
        has_issues = True
    
    if not has_issues:
        print("✅ All validations passed! Ready for injection.")
    else:
        print("\n⚠️  Please review the audit report and resolve issues before proceeding.")
    
    print(f"\n📄 Full report: {args.output_report}")
    print(f"📄 Mapping file: {args.output_mapping}")


if __name__ == "__main__":
    main()
