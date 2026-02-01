import _2025 from '@/assets/data/2025/index.json'
import _2024 from '@/assets/data/2024/index.json'
import _2023 from '@/assets/data/2023/index.json'
import _2022 from '@/assets/data/2022/index.json'
import _2021 from '@/assets/data/2021/index.json'
import _2020 from '@/assets/data/2020/index.json'
import _2019 from '@/assets/data/2019/index.json'
import { QuizQuestion } from '@/assets/data'

export function getAvailableYears(): string[] {
  return ['2025', '2024', '2023', '2022', '2021', '2020', '2019']
}

export function getYearRange(): string {
  const years = getAvailableYears()
  if (years.length === 0) return ''
  const oldest = years[years.length - 1]
  const newest = years[0]
  return `${oldest}-${newest}`
}

export function getYearCounts(): Record<string, number> {
  return {
    '2025': _2025.length,
    '2024': _2024.length,
    '2023': _2023.length,
    '2022': _2022.length,
    '2021': _2021.length,
    '2020': _2020.length,
    '2019': _2019.length,
  }
}

export function filterQuestionsByYear(year: string) {
  if (year === 'all') {
    return [..._2025, ..._2024, ..._2023, ..._2022, ..._2021, ..._2020, ..._2019]
  }
  
  const yearDataMap: Record<string, QuizQuestion[]> = {
    '2025': _2025 as QuizQuestion[],
    '2024': _2024 as QuizQuestion[],
    '2023': _2023 as QuizQuestion[],
    '2022': _2022 as QuizQuestion[],
    '2021': _2021 as QuizQuestion[],
    '2020': _2020 as QuizQuestion[],
    '2019': _2019 as QuizQuestion[],
  }
  
  return [...(yearDataMap[year] || [])]
}
