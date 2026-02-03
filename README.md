# PhilNITS Mock Examination

This repository hosts an online PhilNITS FE AM Mock Examination, developed using Next.js.

## Quiz Details

- The quiz consists of **60 randomly selected questions** from various topics covered in exams from previous years.
- You have **1 hour and 30 minutes** to complete the quiz.
- Some questions may include images.
- After completing the quiz, you'll receive **detailed explanations** for each question.
- You can **retake the quiz multiple times**, with different sets of questions.

## 🔧 Content Management Pipeline

By Homer Adriel Dorin

This project includes a unified pipeline for extracting exam questions from PDFs and converting them into web-ready JSON format.

### Quick Start for New Years

```bash
# Extract questions from PDFs (auto-creates directories)
cd scripts
python pipeline.py parse-questions --year 2025

# Place questions.pdf and answers.pdf in data/2025/
# Manually crop diagrams following console instructions
# Add visual content to questions
python pipeline.py add-visuals --year 2025
```

### Pipeline Features

- **Auto-directory Creation**: Creates year-specific folder structure automatically
- **PDF Processing**: Extracts questions/answers and renders pages for manual cropping
- **Visual Content Integration**: Supports 3 types of visual content (diagrams, choices, composites)
- **Debug Mode**: Comprehensive logging with `--verbose` flag
- **Safe Testing**: `--dry-run` mode for validation without file changes

For detailed pipeline documentation, see PIPELINE_USAGE.md under scripts/ for more details!

## Technology Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Deployment:** DCISM Web Server

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/usc-cisco/philnits-mock.git
   cd philnits-mock
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

## Contributing

Contributions are welcome. Please fork the repository, create a new branch, and submit a pull request.

## Credits

Special thanks to [philnits-vault](https://github.com/usc-cisco/philnits-vault) repository for their solutions and explanations.

## License

This project is licensed under the MIT License.
