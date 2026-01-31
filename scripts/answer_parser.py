"""
Answer Key Parser - Extracts correct answers from answers.pdf
"""
import fitz


def parse_answer_key(pdf_path):
    """
    Parse the answer key PDF and return a dictionary mapping question numbers to answers.
    
    Args:
        pdf_path: Path to answers.pdf
        
    Returns:
        dict: {question_number: answer_letter}
              e.g., {1: 'd', 2: 'd', 3: 'c', ...}
    """
    doc = fitz.open(pdf_path)
    page = doc[0]  # Answer key is single page
    text = page.get_text()
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    answers = {}
    
    # Parse alternating pattern: Q.No line, then Correct Answer line
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Skip header lines
        if line.lower() in ['q.no', 'correct answer', 'q. no']:
            i += 1
            continue
        
        # Try to parse as question number
        if line.isdigit():
            q_num = int(line)
            # Next line should be the answer
            if i + 1 < len(lines):
                answer_line = lines[i + 1]
                # Answer should be a single letter (a, b, c, d)
                if len(answer_line) == 1 and answer_line.lower() in ['a', 'b', 'c', 'd']:
                    answers[q_num] = answer_line.lower()
                    i += 2  # Skip both lines
                    continue
        
        i += 1
    
    doc.close()
    
    print(f"✓ Parsed {len(answers)} answers from answer key")
    return answers


def validate_answers(answers, expected_count=100):
    """
    Validate that we have all expected answers.
    
    Args:
        answers: Dictionary of answers
        expected_count: Expected number of questions (default 100)
    """
    missing = []
    for i in range(1, expected_count + 1):
        if i not in answers:
            missing.append(i)
    
    if missing:
        print(f"⚠ Warning: Missing answers for questions: {missing}")
    else:
        print(f"✓ All {expected_count} answers present")
    
    return len(missing) == 0


if __name__ == "__main__":
    from pathlib import Path
    
    # Resolve paths relative to script location
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    data_dir = project_root / "data"
    
    # Test the parser
    answers = parse_answer_key(str(data_dir / "answers.pdf"))
    print(f"\nFirst 10 answers:")
    for q in range(1, 11):
        if q in answers:
            print(f"  Q{q}: {answers[q]}")
    
    validate_answers(answers, expected_count=100)
