"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Question from "@/components/Question";
import Results from "@/components/Results";
import Timer from "@/components/Timer";
import LandingPage from "@/components/LandingPage";
import { quizData, type QuizQuestion } from "@/assets/data";
import {
  getAvailableYears,
  getYearCounts,
  filterQuestionsByYear,
  getYearRange,
} from "@/lib/yearFilter";
import { shuffleChoices, shouldShuffleQuestion } from "@/lib/shuffle";

// Developer Mode - For Testing Visual Content
// Enable via URL parameter: ?dev=2025 (or any year)
// Filters to show only visual content questions from that year
const getDevModeYear = (): number | null => {
  if (typeof window === "undefined") return null;

  const urlParams = new URLSearchParams(window.location.search);
  const devParam = urlParams.get("dev");

  if (devParam) {
    const year = parseInt(devParam, 10);
    return !isNaN(year) ? year : null;
  }

  return null;
};

export default function Quiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [devModeYear, setDevModeYear] = useState<number | null>(null);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>("all");

  useEffect(() => {
    setDevModeYear(getDevModeYear());
    const savedYear = localStorage.getItem("selectedYear");
    if (savedYear) {
      setSelectedYear(savedYear);
    }
  }, []);

  const shuffle = (array: QuizQuestion[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const startQuiz = useCallback(
    (numQuestions: number, year?: string) => {
      let questionsToUse: QuizQuestion[];

      if (devModeYear) {
        // Developer mode: Load ONLY questions from specified year with visual content
        // For testing diagram injection and visual content validation
        const yearQuestions = quizData.filter((q) =>
          q.id.startsWith(`${devModeYear}_FE-A`),
        );
        const visualQuestions = yearQuestions.filter(
          (q) =>
            q.choiceImage ||
            q.compositeImage ||
            q.question.includes("![Image]("),
        );
        questionsToUse = visualQuestions;
        console.log(
          `DEV MODE: Loaded ${visualQuestions.length} visual content questions from ${devModeYear}`,
        );
        console.log(
          "Question IDs:",
          visualQuestions
            .map((q) => q.id.replace(`${devModeYear}_FE-A_`, "Q"))
            .join(", "),
        );
      } else {
        // Normal mode: Filter by year, then shuffle
        const yearToUse = year || selectedYear;
        const filteredByYear = filterQuestionsByYear(yearToUse);
        const shuffled = shuffle([...filteredByYear]);
        questionsToUse = shuffled.slice(0, numQuestions);
        console.log(
          `Loaded ${questionsToUse.length} questions from ${yearToUse === "all" ? "all years" : yearToUse}`,
        );
      }

      const processedQuestions = questionsToUse.map((q) => {
        if (shouldShuffleQuestion(q)) {
          // Shuffle choices for text-based questions
          const { shuffledOptions, shuffledCorrectAnswer } = shuffleChoices(
            q.options,
            q.correctAnswer,
            q.id,
          );

          // Debug logging - only in dev mode
          if (process.env.NODE_ENV === "development" || devModeYear) {
            console.log(`Shuffled ${q.id}:`);
            console.log(
              `Original correct: ${String.fromCharCode(65 + q.correctAnswer)} → Shuffled: ${String.fromCharCode(65 + shuffledCorrectAnswer)}`,
            );
            console.log(`Original A: "${q.options[0].substring(0, 30)}..."`);
            console.log(
              `Shuffled A: "${shuffledOptions[0].substring(0, 30)}..."`,
            );
          }

          return {
            ...q,
            options: shuffledOptions,
            correctAnswer: shuffledCorrectAnswer,
          };
        }
        // Keep original order for questions with visual content
        if (process.env.NODE_ENV === "development" || devModeYear) {
          console.log(`⏭Skipped shuffling ${q.id} (has visual content)`);
        }
        return q;
      });

      setQuestions(processedQuestions);
      setQuizStarted(true);

      const totalTime = processedQuestions.length * 90 * 1000;

      setTotalTime(totalTime);
      setTimeRemaining(totalTime);
    },
    [devModeYear, selectedYear],
  );

  const endQuiz = useCallback(() => {
    setQuizCompleted(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && !quizCompleted) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(timer);
            endQuiz();
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [quizStarted, quizCompleted, endQuiz]);

  const handleAnswer = (selectedOption: number) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedOption;
    setUserAnswers(newUserAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      endQuiz();
    }
  };

  const handleGoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowSubmitDialog(true);
  };

  const confirmSubmit = () => {
    setShowSubmitDialog(false);
    endQuiz();
  };

  const restartQuiz = () => {
    setUserAnswers([]);
    setQuizStarted(true);
    setQuizCompleted(false);
    setTimeRemaining(totalTime);
    setCurrentQuestion(0);
  };

  const newQuiz = () => {
    setUserAnswers([]);
    setQuizStarted(false);
    setQuizCompleted(false);
    setTimeRemaining(totalTime);
    setCurrentQuestion(0);
  };

  // Calculate visual content count for dev mode
  const getVisualContentCount = () => {
    if (!devModeYear) return 0;
    const yearQuestions = quizData.filter((q) =>
      q.id.startsWith(`${devModeYear}_FE-A`),
    );
    return yearQuestions.filter(
      (q) =>
        q.choiceImage || q.compositeImage || q.question.includes("![Image]("),
    ).length;
  };

  return (
    <div className="container mx-auto p-4">
      {!quizStarted ? (
        <LandingPage
          onStartQuiz={startQuiz}
          devModeYear={devModeYear}
          visualContentCount={getVisualContentCount()}
          availableYears={getAvailableYears()}
          yearCounts={getYearCounts()}
          yearRange={getYearRange()}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
      ) : (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              Exam Review Quiz{" "}
              {devModeYear && (
                <span className="text-sm text-warning ml-2">
                  (Dev Mode: {devModeYear})
                </span>
              )}
            </CardTitle>
            <CardDescription>
              {devModeYear
                ? `Developer Mode: Testing ${devModeYear} visual content questions only`
                : "Test your knowledge and review explanations"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Timer timeRemaining={timeRemaining} />
            {!quizCompleted && questions.length > 0 ? (
              <Question
                id={questions[currentQuestion].id}
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
                onGoBack={handleGoBack}
                onSubmit={handleSubmit}
                currentQuestionNumber={currentQuestion + 1}
                totalQuestions={questions.length}
                isFirstQuestion={currentQuestion === 0}
                choiceImage={questions[currentQuestion].choiceImage}
                compositeImage={questions[currentQuestion].compositeImage}
              />
            ) : (
              <Results
                quizData={questions}
                userAnswers={userAnswers}
                onRestart={restartQuiz}
                onNewQuiz={newQuiz}
                timeRemaining={timeRemaining}
                timeTaken={totalTime - timeRemaining}
              />
            )}
          </CardContent>
        </Card>
      )}

      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Quiz Early?</DialogTitle>
            <DialogDescription>
              Are you sure you want to submit your quiz? You still have time
              remaining.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setShowSubmitDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={confirmSubmit}>Yes, Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
