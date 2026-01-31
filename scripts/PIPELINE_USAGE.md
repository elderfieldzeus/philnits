# Pipeline Usage Guide

## Quick Start for 2025

### Phase 1: Extract Questions

```bash
cd philnits/scripts
python pipeline.py parse-questions --year 2025
```

**This will:**

- **Auto-create** all necessary directories for 2025
- Parse `philnits/data/2025/questions.pdf` and `philnits/data/2025/answers.pdf`
- Generate `temp/webapp_questions_2025.json` (preliminary, no images)
- Render PDF pages to `temp/rendered_pages/` for cropping reference

**Time:** ~2-3 minutes

**Auto-created directories:**

```
philnits/
├── data/2025/                          # Place your PDFs here
├── public/Files/2025/
│   ├── question_diagrams/              # Ready for question diagrams
│   ├── choices/                        # Ready for choice images
│   └── fill_in_the_blanks/            # Ready for composite images
├── app/assets/data/2025/              # Final JSON destination
└── temp/                              # Processing files
    └── rendered_pages/                # PDF page images
```

---

### MANUAL STEP: Crop Diagrams

Review the console output for detailed instructions on THREE types of visual content:

1. **Question Diagrams** → `public/Files/2025/question_diagrams/2025-{num}.png`

   - When question text references a diagram/figure/table
2. **Choice Images** → `public/Files/2025/choices/2025-{num}.png`

   - When answer choices A/B/C/D are diagrams (network topologies, etc.)
3. **Composite Images** → `public/Files/2025/fill_in_the_blanks/2025-{num}.png`

   - When entire question + choices must be shown as image (fill-in-blanks)

**Time:** ~1-2 hours (use 2025_backup as reference)

---

### Phase 2: Add Visual Content

```bash
python pipeline.py add-visuals --year 2025
```

**This will:**

- Scan your cropped images in `public/Files/2025/`
- Validate file naming and detect conflicts
- Inject diagram references into JSON
- Generate final `app/assets/data/2025/index.json`

**Time:** ~30 seconds

---

## Command Reference

### Phase 1 Options

```bash
# Standard extraction
python pipeline.py parse-questions --year 2025

# Skip rendering (if you already have rendered pages)
python pipeline.py parse-questions --year 2025 --skip-rendering

# Verbose mode (show detailed errors)
python pipeline.py parse-questions --year 2025 --verbose
```

### Phase 2 Options

```bash
# Standard injection
python pipeline.py add-visuals --year 2025

# Validation only (don't write files)
python pipeline.py add-visuals --year 2025 --validate-only

# Verbose mode
python pipeline.py add-visuals --year 2025 --verbose
```

---

## File Structure

```
philnits/
├── scripts/
│   └── pipeline.py          # Main entry point
├── data/
│   └── 2025/                # Year-specific folder
│       ├── questions.pdf    # INPUT: Place here
│       └── answers.pdf      # INPUT: Place here
├── temp/
│   ├── qa_mapping.json                # Debug format
│   ├── webapp_questions_2025.json     # Preliminary (no visuals)
│   ├── visual_content_mapping.json    # Validation report
│   └── rendered_pages/                # For cropping reference
│       ├── page3_full.png
│       └── ...
├── public/Files/2025/
│   ├── question_diagrams/
│   │   ├── 2025-1.png
│   │   └── ...
│   ├── choices/
│   │   ├── 2025-30.png
│   │   └── ...
│   └── fill_in_the_blanks/
│       ├── 2025-7.png
│       └── ...
└── app/assets/data/2025/
    └── index.json           # FINAL: Web app ready
```

---

## Web App Integration

After Phase 2 completes, update the web app:

1. **Import the new year** in `app/assets/data/index.ts`:

   ```typescript
   import _2025 from '@/assets/data/2025/index.json'
   ```
2. **Add to quizData array**:

   ```typescript
   export const quizData: QuizQuestion[] = [
     ..._2025,
     ..._2024,
     // ... other years
   ]
   ```
3. **Test**:

   ```bash
   npm run dev
   ```

---

## Adding Solutions (Optional)

After the pipeline completes, all questions have an empty `solution` field. Adding detailed explanations is optional but helps students learn.

### When to Add Solutions

**After Phase 1 or Phase 2** completes, edit the generated JSON to add explanations:

```bash
# Open the generated file
code app/assets/data/2025/index.json
```

### Solution Format

Solutions support **markdown + KaTeX math**:

```json
{
  "id": "2025_FE-A_1",
  "question": "What is 2 + 2?",
  "options": ["3", "4", "5", "6"],
  "correctAnswer": 1,
  "solution": "### Step 1: Add the numbers\n\n$2 + 2 = 4$\n\nTherefore, the answer is **4**."
}
```

**Formatting:**

- Use `### Step 1:`, `### Step 2:` for structure
- Inline math: `$x = 5$`
- Block math: `$$\sum_{i=1}^{n} i$$`
- Bold: `**important**`
- Lists, tables, images all supported

### Solution Sources

Solutions can be adapted from the [philnits-vault repository](https://github.com/usc-cisco/philnits-vault), which provides detailed explanations for previous PhilNITS exam questions.

### Testing Solutions

Use developer mode to quickly test your solutions:

```bash
npm run dev
# Open http://localhost:3000/?dev=2025
```

Complete the quiz to see how solutions display in the results screen.

---

## Troubleshooting

### "Questions PDF not found"

- Directories are auto-created when you run the command
- Simply place `questions.pdf` in the generated `philnits/data/{year}/` folder
- No need to create directories manually

### "Answers PDF not found"

- Simply place `answers.pdf` in the generated `philnits/data/{year}/` folder

### "Preliminary JSON not found" (Phase 2)

- Run Phase 1 first: `python pipeline.py parse-questions --year 2025`

### Validation errors in Phase 2

- Check file naming: Must be `2025-{number}.png` (not `2025_{number}.png`)
- Check for duplicates: Only one file per question per category
- Check for conflicts: Same question shouldn't appear in multiple categories

### Import errors

- Run from `philnits/scripts/` directory
- Ensure all 7 Python files are in `scripts/` folder
- Check Python version: `python --version` (requires 3.7+)

---
