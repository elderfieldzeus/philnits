import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Credits from "@/components/Credits"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Calendar } from "lucide-react"

interface LandingPageProps {
  onStartQuiz: (numQuestions: number, selectedYear?: string) => void
  devModeYear?: number | null
  visualContentCount?: number
  availableYears?: string[]
  yearCounts?: Record<string, number>
  yearRange?: string
  selectedYear?: string
  onYearChange?: (year: string) => void
}

export default function LandingPage({ 
  onStartQuiz, 
  devModeYear, 
  visualContentCount,
  availableYears = [],
  yearCounts = {},
  yearRange = "",
  selectedYear: propSelectedYear = "all",
  onYearChange
}: LandingPageProps) {
  const [selectedYear, setSelectedYear] = useState(propSelectedYear)
  const [numQuestions, setNumQuestions] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = parseInt(localStorage.getItem("numQuestions") || "60", 10)
      const maxQuestions = selectedYear === "all" 
        ? Object.values(yearCounts).reduce((sum, count) => sum + count, 0)
        : yearCounts[selectedYear] || 60
      return (isNaN(stored) || stored < 1 ? 60 : Math.min(stored, maxQuestions)).toString()
    }

    return "60"
  })  
  
  // Update selected year when prop changes

  useEffect(() => {
    setSelectedYear(propSelectedYear)
  }, [propSelectedYear])

  
// Calculate max questions based on year
  const maxQuestions = devModeYear 
    ? visualContentCount || 0
    : selectedYear === "all"
    ? Object.values(yearCounts).reduce((sum, count) => sum + count, 0)
    : yearCounts[selectedYear] || 0

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value
    setSelectedYear(year)
    onYearChange?.(year)
    
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedYear", year)
    }

    // Always default to maximum questions for selected year
    const newMax = year === "all"
      ? Object.values(yearCounts).reduce((sum, count) => sum + count, 0)
      : yearCounts[year] || 0
    
    setNumQuestions(newMax.toString())
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(parseInt(e.target.value, 10), maxQuestions))
    setNumQuestions(value.toString())
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (typeof window !== "undefined") {
      localStorage.setItem("numQuestions", numQuestions)
    }

    onStartQuiz(parseInt(numQuestions, 10), selectedYear)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl">
          PhilNITS FE AM Mock Exam {devModeYear && <span className="text-sm text-warning ml-2">(Dev Mode: {devModeYear})</span>}
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
            ? `Developer mode is active. Showing only ${devModeYear} questions with visual content (diagrams, choice  (${yearRange})images, or composite images). ${visualContentCount || 0} questions available for testing.`
            : `This quiz contains randomly selected questions from a range of topics covered in previous years' exams. A total of ${Object.values(yearCounts).reduce((sum, count) => sum + count, 0)} questions are available.`
          }
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>You are given 1:30 minutes per question</li>
          <li>Some questions may include images</li>
          <li>After completing the quiz, you&apos;ll receive detailed explanations for each question</li>
          <li>You can retake the quiz multiple times with different questions</li>
        </ul>
        <p>Are you ready to begin?</p>
        <Credits />
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Year Filter */}
          {!devModeYear && (
            <div className="space-y-2">
              <label htmlFor="yearFilter" className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-4 w-4" />
                Year Filter
              </label>
              <select
                id="yearFilter"
                value={selectedYear}
                onChange={handleYearChange}
                className="w-full rounded-md border border-input bg-white dark:bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="all">
                  All Years
                </option>
                {availableYears.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Number of Questions */}
          <div className="space-y-2">
            <label htmlFor="numQuestions" className="text-sm font-medium">
              {devModeYear ? "Number of Questions (All Visual Content)" : "Number of Questions"}
            </label>
            <div className="flex flex-col gap-2 w-full sm:flex-row">
              <Input 
                id="numQuestions" 
                type="number" 
                min={1} 
                max={maxQuestions} 
                required 
                value={devModeYear ? visualContentCount : numQuestions} 
                onChange={onChange}
                disabled={!!devModeYear}
                className={devModeYear ? "bg-muted cursor-not-allowed" : ""}
              />
              <Button type="submit" className="w-full sm:w-auto sm:min-w-[120px]">
                Start Quiz
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
