"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Question from "@/components/Question"
import Results from "@/components/Results"
import Timer from "@/components/Timer"
import LandingPage from "@/components/LandingPage"
import { quizData, type QuizQuestion } from "@/assets/data" 

// Developer Mode - For Testing Visual Content
// Enable via URL parameter: ?dev=2025 (or any year)
// Filters to show only visual content questions from that year
const getDevModeYear = (): number | null => {
  if (typeof window === 'undefined') return null
  
  const urlParams = new URLSearchParams(window.location.search)
  const devParam = urlParams.get('dev')
  
  if (devParam) {
    const year = parseInt(devParam, 10)
    return !isNaN(year) ? year : null
  }
  
  return null
}

export default function Quiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [totalTime, setTotalTime] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [devModeYear, setDevModeYear] = useState<number | null>(null)

  // Initialize dev mode on mount
  useEffect(() => {
    setDevModeYear(getDevModeYear())
  }, [])

  const shuffle = (array: QuizQuestion[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  };

  const startQuiz = useCallback((numQuestions: number) => {
    let questionsToUse: QuizQuestion[]
    
    if (devModeYear) {
      // Developer mode: Load ONLY questions from specified year with visual content
      // For testing diagram injection and visual content validation
      const yearQuestions = quizData.filter(q => q.id.startsWith(`${devModeYear}_FE-A`))
      const visualQuestions = yearQuestions.filter(q => 
        q.choiceImage || 
        q.compositeImage || 
        q.question.includes('![Image](')
      )
      questionsToUse = visualQuestions
      console.log(`DEV MODE: Loaded ${visualQuestions.length} visual content questions from ${devModeYear}`)
      console.log('Question IDs:', visualQuestions.map(q => q.id.replace(`${devModeYear}_FE-A_`, 'Q')).join(', '))
    } else {
      // Normal mode: Shuffle all years
      const shuffled = shuffle([...quizData])
      questionsToUse = shuffled.slice(0, numQuestions)
    }
    
    setQuestions(questionsToUse)
    setQuizStarted(true)

    const totalTime = questionsToUse.length * 90 * 1000

    setTotalTime(totalTime)
    setTimeRemaining(totalTime)
  }, [])

  const endQuiz = useCallback(() => {
    setQuizCompleted(true)
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (quizStarted && !quizCompleted) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(timer)
            endQuiz()
            return 0
          }
          return prevTime - 1000
        })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [quizStarted, quizCompleted, endQuiz])

  const handleAnswer = (selectedOption: number) => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestion] = selectedOption
    setUserAnswers(newUserAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      endQuiz()
    }
  }

  const handleGoBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    if(confirm("Are you sure?")) {
      endQuiz()
    }
  }

  const restartQuiz = () => {
    setUserAnswers([])
    setQuizStarted(true)
    setQuizCompleted(false)
    setTimeRemaining(totalTime)
    setCurrentQuestion(0)
  }

  const newQuiz = () => {
    setUserAnswers([])
    setQuizStarted(false)
    setQuizCompleted(false)
    setTimeRemaining(totalTime)
    setCurrentQuestion(0)
  }

  // Calculate visual content count for dev mode
  const getVisualContentCount = () => {
    if (!devModeYear) return 0
    const yearQuestions = quizData.filter(q => q.id.startsWith(`${devModeYear}_FE-A`))
    return yearQuestions.filter(q => 
      q.choiceImage || 
      q.compositeImage || 
      q.question.includes('![Image](')
    ).length
  }

  return (
    <div className="container mx-auto p-4">
      {!quizStarted ? (
        <LandingPage 
          onStartQuiz={startQuiz} 
          devModeYear={devModeYear}
          visualContentCount={getVisualContentCount()}
        />
      ) : (
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              Exam Review Quiz {devModeYear && <span className="text-sm text-orange-500 ml-2">(Dev Mode: {devModeYear})</span>}
            </CardTitle>
            <CardDescription>
              {devModeYear 
                ? `Developer Mode: Testing ${devModeYear} visual content questions only` 
                : "Test your knowledge and review explanations"
              }
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
    </div>
  )
}

