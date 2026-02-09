import _2025 from '@/assets/data/2025'
import _2024 from '@/assets/data/2024'
import _2023 from '@/assets/data/2023'
import _2022 from '@/assets/data/2022'
import _2020 from '@/assets/data/2020'
import _2021 from '@/assets/data/2021'
import _2019 from '@/assets/data/2019'

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  solution?: string
  choiceImage?: string
  compositeImage?: string
}

export const quizData: QuizQuestion[] = [
  ..._2025,
  ..._2024,
  ..._2023,
  ..._2022,
  ..._2021,
  ..._2020,
  ..._2019,
]