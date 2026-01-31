import { Button } from "@/components/ui/button"
import type { QuizQuestion } from "@/assets/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import React from "react"
import Markdown from "@/components/Markdown"
import Credits from "@/components/Credits"
import ScrollToTop from "@/components/ScrollToTop"
import Image from "next/image"

interface ResultsProps {
  quizData: QuizQuestion[]
  userAnswers: number[]
  onRestart: () => void
  onNewQuiz: () => void
  timeRemaining: number
  timeTaken: number
}

export default function Results({ quizData, userAnswers, onRestart, onNewQuiz, timeRemaining, timeTaken }: ResultsProps) {
  const score = userAnswers.reduce((acc, answer, index) => {
    return answer === quizData[index].correctAnswer ? acc + 1 : acc
  }, 0)

  const isTimeOut = timeRemaining === 0

  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / 3600000)
    const minutes = Math.floor((ms % 3600000) / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Quiz Results</h2>
      {isTimeOut ? (
        <p className="text-xl text-red-600 font-bold">Time&apos;s up!</p>
      ) : (
        <p className="text-xl text-green-600 font-bold">Quiz completed!</p>
      )}
      <p className="text-xl">
        Your score: {score} out of {quizData.length}
      </p>
      <p className="text-xl">Time taken: {formatTime(timeTaken)}</p>

      <Credits />
      <div className="flex space-x-4">
        <Button onClick={onRestart} className="flex-1">
          Retake Quiz
        </Button>
        <Button onClick={onNewQuiz} className="flex-1">
          New Quiz
        </Button>
      </div>
      
      <hr className="my-4"/>

      <p className="text-lg font-bold">Review answers</p>

      {quizData.map((question, index) => (
        <div key={index} className={`border p-4 rounded-md ${userAnswers[index] === question.correctAnswer ? 'bg-green-50' : 'bg-red-50'}`}>
          <span className="text-sm font-medium bg-primary text-primary-foreground px-2 py-1 rounded-full">
            Question {index + 1} of {quizData.length}
          </span>
          <h2 className="font-bold text-sm my-4">{question.id}</h2>
          
          {/* Composite Image: Show only the image (no question text) */}
          {question.compositeImage ? (
            <div className="border border-gray-200 rounded-lg overflow-hidden my-4">
              <Image
                src={`/${question.compositeImage}`}
                alt="Question and choices"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ) : (
            /* Standard question or question with diagram in markdown */
            <div className="font-medium">
              <Markdown>{question.question}</Markdown>
            </div>
          )}
          
          {/* Choice Image: Show after question text */}
          {question.choiceImage && !question.compositeImage && (
            <div className="border border-gray-200 rounded-lg overflow-hidden my-4">
              <Image
                src={`/${question.choiceImage}`}
                alt="Answer choices"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>
          )}
          
          <p className="font-bold my-1">
            {userAnswers[index] === undefined ? <span className="text-red-600">Not Answered</span> : 
            (userAnswers[index] === question.correctAnswer ? <span className="text-green-600">Correct</span> : 
            <span className="text-red-600">Incorrect</span>)
            }
          </p>
            <>
              {/* <p className="mt-2 font-semibold">
                Your answer:
              </p>
              <div className="font-medium">
                <Markdown>{question.options[userAnswers[index]]}</Markdown>
              </div>
              <p className="font-bold my-1">
                {userAnswers[index] === question.correctAnswer ? (
                  <span className="text-green-600">Correct</span>
                ) : (
                  <span className="text-red-600">Incorrect</span>
                )}
              </p>
              {userAnswers[index] !== question.correctAnswer && (
                <div>
                    <p className="mt-2 font-semibold">
                      Correct answer:
                    </p>
                    <div className="font-medium">
                      <Markdown>{question.options[question.correctAnswer]}</Markdown>
                    </div>
                </div>
              )} */}
              <div className="flex flex-col gap-2 py-4">
                <p className="font-semibold">Choices:</p>
                {
                  question.options.map((option, o_index) => {
                    return (
                      <div
                        key={o_index}
                        className={`w-full border border-gray-200 rounded-md p-4 text-wrap
                          ${o_index === question.correctAnswer ? 'bg-green-300' :
                            (o_index === userAnswers[index] ? 'bg-red-300' :
                            'bg-white'
                            )}
                        `}
                      >
                        <Markdown>{option}</Markdown>
                      </div>
                    )
                  })
                }
              </div>
              {question.solution && (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="solution">
                    <AccordionTrigger>Show Detailed Solution</AccordionTrigger>
                    <AccordionContent>
                    <div className="relative w-full my-2">
                      <Markdown>
                        {question.solution}
                      </Markdown>
                    </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </>
        </div>
      ))}
      <ScrollToTop />
    </div>
  )
}

