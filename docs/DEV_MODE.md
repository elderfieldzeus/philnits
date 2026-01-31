# Developer Mode - Visual Content Testing

## Overview

Developer mode is a URL-based testing feature for validating visual content integration. It filters the quiz to show only questions with diagrams, choice images, or composite images from a specific year.

## Purpose

When adding new exam questions with visual content, developers need to verify:

1. Image paths are correct
2. Images render properly
3. Diagram references work
4. Visual content displays correctly

This mode makes validation faster by showing only the questions that need visual testing.

## How to Enable

Add the year as a URL parameter:

```
http://localhost:3000/?dev=2025
http://localhost:3000/?dev=2026
```

The parameter accepts any year value. Questions will be filtered to match that year and only include those with visual content.

**To disable:** Simply remove the URL parameter or navigate without it.

## What It Does

**Normal Mode:**

- Loads all questions from all available years
- Shuffles questions randomly
- Shows the number of questions selected (60, 80, or 100)

**Developer Mode:**

- Filters to only the specified year
- Shows only questions with visual content:
  - Questions with `choiceImage` field (answer choices as images)
  - Questions with `compositeImage` field (fill-in-blank composite images)
  - Questions with markdown images in the question text
- Displays all matching questions (not limited by count)
- Logs filtered question IDs to console

## Visual Indicators

When developer mode is active:

- Title shows: "Exam Review Quiz (Dev Mode: 2025)"
- Description shows: "Developer Mode: Testing 2025 visual content questions only"
- Console logs the count and IDs of loaded questions

## Use Cases

### After Running the Pipeline

```bash
# Generate new year data
python pipeline.py parse-questions --year 2025

# Manually crop diagrams from rendered pages

# Inject visual content references
python pipeline.py add-visuals --year 2025

# Test in browser
http://localhost:3000/?dev=2025
```

### Validating Visual Content

Use developer mode to quickly check:

- All visual questions load without errors
- Image file paths resolve correctly
- Markdown images render as expected
- Choice images and composite images display properly

### Code Review

When reviewing pull requests with new visual content:

- Enable developer mode with the appropriate year
- Review all visual questions in one session
- Verify integration without affecting normal quiz operation

## Student Safety

Students will not encounter this mode during normal use because:

- No UI button or menu option exists to enable it
- The feature is not documented in user-facing areas
- Activating it requires manually editing the URL
- Even if accidentally activated, it only changes which questions appear

The mode is designed to be discoverable by developers but invisible to end users.

## Implementation

**File:** `app/page.tsx`

**Core Function:**

```typescript
const getDevModeYear = (): number | null => {
  // Parse URL parameter: ?dev=2025
  // Returns year as number, or null if not present
}
```

**Filter Logic:**

```typescript
if (devModeYear) {
  // Filter questions by year (e.g., id starts with "2025_FE-A")
  // Then filter to only those with visual content fields
} else {
  // Normal mode: shuffle all questions
}
```

**State:** The component maintains `devModeYear` state that updates on mount when the URL parameter is detected.

## Troubleshooting

**Developer mode not activating:**

1. Verify the URL includes the parameter correctly: `?dev=2025`
2. Check the browser console for confirmation messages
3. Try a hard refresh: Ctrl+F5

**No questions appearing in developer mode:**

1. Confirm the year data is imported in `app/assets/data/index.ts`
2. Check that the JSON files include visual content fields
3. Validate the pipeline output: `python pipeline.py add-visuals --year 2025 --validate-only`
