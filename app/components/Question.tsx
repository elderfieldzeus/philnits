import { Button } from "@/components/ui/button";
import Markdown from "@/components/Markdown";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

interface QuestionProps {
  id: string;
  question: string;
  options: string[];
  onAnswer: (selectedOption: number) => void;
  onGoBack: () => void;
  onSubmit: () => void;
  currentQuestionNumber: number;
  totalQuestions: number;
  isFirstQuestion: boolean;
  choiceImage?: string;
  compositeImage?: string;
}

export default function Question({
  id,
  question,
  options,
  onAnswer,
  onGoBack,
  onSubmit,
  currentQuestionNumber,
  totalQuestions,
  isFirstQuestion,
  choiceImage,
  compositeImage,
}: QuestionProps) {
  // CASE 1: Composite Image (Full question + choices as image)
  if (compositeImage) {
    return (
      <div className="space-y-4">
        <span className="text-sm font-medium bg-primary text-primary-foreground px-2 py-1 rounded-full">
          Question {currentQuestionNumber} of {totalQuestions}
        </span>
        <h2 className="font-bold text-sm">{id}</h2>
        <div className="border border-border rounded-lg overflow-hidden my-4">
          <Image
            src={assetPath(compositeImage)}
            alt="Question and choices"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-white dark:bg-background justify-start text-left text-wrap py-4 h-auto font-normal hover:bg-primary/10 hover:text-foreground"
              onClick={() => onAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button onClick={onGoBack} disabled={isFirstQuestion}>
            Go Back
          </Button>
          <Button onClick={onSubmit}>Submit Early</Button>
        </div>
      </div>
    );
  }

  // CASE 2: Choice Diagram (Question text + choice images + letter buttons)
  if (choiceImage) {
    return (
      <div className="space-y-4">
        <span className="text-sm font-medium bg-primary text-primary-foreground px-2 py-1 rounded-full">
          Question {currentQuestionNumber} of {totalQuestions}
        </span>
        <h2 className="font-bold text-sm">{id}</h2>
        <div className="font-medium">
          <Markdown>{question}</Markdown>
        </div>
        <div className="border border-border rounded-lg overflow-hidden my-4">
          <Image
            src={assetPath(choiceImage)}
            alt="Answer choices"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          {options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-white dark:bg-background justify-start text-left text-wrap py-4 h-auto font-normal hover:bg-primary/10 hover:text-foreground"
              onClick={() => onAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <Button onClick={onGoBack} disabled={isFirstQuestion}>
            Go Back
          </Button>
          <Button onClick={onSubmit}>Submit Early</Button>
        </div>
      </div>
    );
  }

  // CASE 3: Standard Question (may include diagram in question text via markdown)
  return (
    <div className="space-y-4">
      <span className="text-sm font-medium bg-primary text-primary-foreground px-2 py-1 rounded-full">
        Question {currentQuestionNumber} of {totalQuestions}
      </span>
      <h2 className="font-bold text-sm">{id}</h2>
      <div className="font-medium">
        <Markdown>{question}</Markdown>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className="bg-white dark:bg-background justify-start text-left text-wrap py-4 h-auto font-normal hover:bg-primary/10 hover:text-foreground"
            onClick={() => onAnswer(index)}
          >
            <Markdown>{option}</Markdown>
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button onClick={onGoBack} disabled={isFirstQuestion}>
          Go Back
        </Button>
        <Button onClick={onSubmit}>Submit Early</Button>
      </div>
    </div>
  );
}
