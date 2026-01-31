import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Credits from "@/components/Credits"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { quizData } from "@/assets/data"

interface LandingPageProps {
  onStartQuiz: (numQuestions: number) => void
  devModeYear?: number | null
  visualContentCount?: number
}

export default function LandingPage({ onStartQuiz, devModeYear, visualContentCount }: LandingPageProps) {
  const [numQuestions, setNumQuestions] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = parseInt(localStorage.getItem("numQuestions") || "60", 10)
      return (isNaN(stored) || stored < 1 ? 60 : Math.min(stored, quizData.length)).toString()
    }

    return "60"
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumQuestions((Math.max(1, Math.min(parseInt(e.target.value, 10), quizData.length))).toString())
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (typeof window !== "undefined") {
      localStorage.setItem("numQuestions", numQuestions)
    }

    onStartQuiz(parseInt(numQuestions, 10))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">
          PhilNITS FE AM Mock Exam {devModeYear && <span className="text-sm text-orange-500 ml-2">(Dev Mode: {devModeYear})</span>}
        </CardTitle>
        <CardDescription>
          {devModeYear 
            ? `Developer Mode: Testing ${devModeYear} visual content questions (${visualContentCount || 0} available)`
            : "Test your knowledge and prepare for your upcoming exam"
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">

        <p>
          {devModeYear 
            ? `Developer mode is active. Showing only ${devModeYear} questions with visual content (diagrams, choice images, or composite images). ${visualContentCount || 0} questions available for testing.`
            : `This quiz contains randomly selected questions from a range of topics covered in previous years' exams. A total of ${quizData.length} questions are available.`
          }
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>You are given a 1:30 minutes per questions</li>
          <li>Some questions may include images</li>
          <li>After completing the quiz, you&apos;ll receive detailed explanations for each question</li>
          <li>You can retake the quiz multiple times with different questions</li>
        </ul>
        <p>Are you ready to begin?</p>
        <Credits />
        <form onSubmit={onSubmit} className="space-y-2">
          {!devModeYear && <label htmlFor="numQuestions">Number of Questions</label>}
          {devModeYear && <label htmlFor="numQuestions">Number of Questions (All Visual Content)</label>}
          <div className="flex flex-col gap-2 w-full sm:flex-row">
            <Input 
              id="numQuestions" 
              type="number" 
              min={1} 
              max={devModeYear ? visualContentCount : quizData.length} 
              required 
              value={devModeYear ? visualContentCount : numQuestions} 
              onChange={onChange}
              disabled={devModeYear ? true : false}
              className={devModeYear ? "bg-gray-100 cursor-not-allowed" : ""}
            />
              <Button className="w-full">
                Start Quiz
              </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
