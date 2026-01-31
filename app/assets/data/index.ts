import _2025 from '@/assets/data/2025/index.json'
import _2024 from '@/assets/data/2024/index.json'
import _2023 from '@/assets/data/2023/index.json'
import _2022 from '@/assets/data/2022/index.json'
import _2020 from '@/assets/data/2020/index.json'
import _2021 from '@/assets/data/2021/index.json'
import _2019 from '@/assets/data/2019/index.json'

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