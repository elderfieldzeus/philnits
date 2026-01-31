"""
Mapper - Combines questions and answers, generates output files
"""
import json
from pathlib import Path


def map_questions_to_answers(questions, answers):
    """
    Combine questions with their correct answers.
    
    Args:
        questions: List of question dicts
        answers: Dict of {question_number: answer_letter}
        
    Returns:
        list: Enhanced questions with correct_answer field
    """
    mapped = []
    
    for q in questions:
        q_num = q['number']
        
        # Get correct answer
        if q_num in answers:
            q['correct_answer'] = answers[q_num]
        else:
            q['correct_answer'] = None
            print(f"⚠ Warning: No answer found for Q{q_num}")
        
        mapped.append(q)
    
    return mapped


def generate_webapp_output(questions, output_path, year, exam_code="FE-A"):
    """
    Generate web app format JSON directly.
    
    Args:
        questions: List of mapped question dicts from extraction
        output_path: Path to save web app JSON file
        year: Exam year (e.g., '2025')
        exam_code: Exam code (default: 'FE-A' for Fundamental Engineer - Autumn)
    
    Output format matches philnits/app/assets/data/{year}/index.json
    """
    webapp_questions = []
    
    for q in questions:
        # Convert choices dict → array (sorted by key)
        choices_dict = q.get('choices', {})
        options = [choices_dict[key] for key in sorted(choices_dict.keys())]
        
        # Handle diagram questions with incomplete choices (< 4 options)
        # These will be fixed in Phase 3 after manual diagram cropping
        if len(options) < 4:
            # Pad with placeholder text indicating diagram needed
            while len(options) < 4:
                options.append(f"[Diagram choice - See image for Q{q['number']}]")
            print(f"⚠ Warning: Q{q['number']} has incomplete choices ({len(choices_dict)}/4) - likely diagram question")
        
        # Convert answer letter → 0-indexed position
        answer_letter = q.get('correct_answer', 'a')
        if answer_letter:
            correct_index = ord(answer_letter.lower()) - ord('a')  # a=0, b=1, c=2, d=3
        else:
            correct_index = 0  # Default to first option if missing
        
        # Build web app question format
        webapp_q = {
            "id": f"{year}_{exam_code}_{q['number']}",
            "question": q['text'],
            "options": options,
            "correctAnswer": correct_index,
            "solution": ""  # MANUAL STEP: Fill with detailed explanations after generation
                           # Solutions should include step-by-step reasoning, formulas (KaTeX),
                           # and explanatory text. See existing year data for format examples.
        }
        
        webapp_questions.append(webapp_q)
    
    # Save as array (not wrapped in object)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(webapp_questions, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Generated web app JSON: {output_path}")
    return webapp_questions


def generate_json_output(questions, output_path):
    """
    Generate intermediate JSON output file (for debugging/reference only).
    
    Args:
        questions: List of mapped question dicts
        output_path: Path to save JSON file
    """
    output = {
        'exam': 'IT Passport Examination',
        'date': 'April 2025',
        'total_questions': len(questions),
        'questions': questions
    }
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Generated debug JSON: {output_path}")


def generate_markdown_output(questions, output_path):
    """
    Generate Markdown output file with bolded correct answers.
    
    Args:
        questions: List of mapped question dicts
        output_path: Path to save Markdown file
    """
    lines = []
    lines.append("# IT Passport Examination - April 2025")
    lines.append("")
    lines.append(f"Total Questions: {len(questions)}")
    lines.append("")
    lines.append("---")
    lines.append("")
    
    for q in questions:
        # Question header
        lines.append(f"## Question {q['number']}")
        lines.append("")
        
        # Question text
        lines.append(q['text'])
        lines.append("")
        
        # Choices
        if q.get('choices'):
            correct = q.get('correct_answer')
            
            for letter in ['a', 'b', 'c', 'd']:
                if letter in q['choices']:
                    choice_text = q['choices'][letter]
                    
                    # Bold the correct answer
                    if letter == correct:
                        lines.append(f"**{letter.upper()}) {choice_text}** ✓")
                    else:
                        lines.append(f"{letter.upper()}) {choice_text}")
            
            lines.append("")
        else:
            lines.append("*No choices found*")
            lines.append("")
        
        # Correct answer indicator
        if q.get('correct_answer'):
            lines.append(f"**Correct Answer:** {q['correct_answer'].upper()}")
        else:
            lines.append("**Correct Answer:** *Unknown*")
        
        lines.append("")
        lines.append("---")
        lines.append("")
    
    # Write to file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    
    print(f"✓ Generated Markdown: {output_path}")


def generate_summary(questions):
    """
    Print summary statistics.
    
    Args:
        questions: List of mapped questions
    """
    total = len(questions)
    with_answers = sum(1 for q in questions if q.get('correct_answer'))
    with_choices = sum(1 for q in questions if q.get('choices'))
    
    print("\n" + "="*60)
    print("SUMMARY")
    print("="*60)
    print(f"Total Questions: {total}")
    print(f"Questions with Answers: {with_answers}/{total}")
    print(f"Questions with Choices: {with_choices}/{total}")
    
    # Answer distribution
    if with_answers > 0:
        answer_counts = {'a': 0, 'b': 0, 'c': 0, 'd': 0}
        for q in questions:
            ans = q.get('correct_answer')
            if ans in answer_counts:
                answer_counts[ans] += 1
        
        print("\nAnswer Distribution:")
        for letter, count in sorted(answer_counts.items()):
            print(f"  {letter.upper()}: {count}")
    
    print("="*60)
