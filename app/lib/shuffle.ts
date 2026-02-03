/**
 * Shuffle Utility for Quiz Answer Choices
 *
 * Provides deterministic shuffling of answer choices based on question ID.
 */

/**
 * @param seed - String to use as seed (typically question ID)
 * @returns Random number between 0 and 1
 */
function seededRandom(seed: string): () => number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // LCG
  let state = Math.abs(hash);
  return function () {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return state / 0x7fffffff;
  };
}

/**
 * Fisher-Yates shuffle algorithm with seeded randomization
 * @param array - Array to shuffle
 * @param seed - Seed string for deterministic shuffling
 * @returns New shuffled array (does not mutate original)
 */
export function shuffleArray<T>(array: T[], seed: string): T[] {
  const shuffled = [...array];
  const random = seededRandom(seed);

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Shuffle answer choices and update the correct answer index
 * @param options - Array of answer choice strings
 * @param correctAnswer - Original index of correct answer (0-indexed)
 * @param questionId - Unique question identifier for seeding
 * @returns Object with shuffled options and new correct answer index
 */
export function shuffleChoices(
  options: string[],
  correctAnswer: number,
  questionId: string,
): { shuffledOptions: string[]; shuffledCorrectAnswer: number } {
  // Create mapping of original indices to shuffled indices
  const indices = options.map((_, i) => i);
  const shuffledIndices = shuffleArray(indices, questionId);

  // Shuffle the options using the same mapping
  const shuffledOptions = shuffledIndices.map((i) => options[i]);

  // Find where the correct answer moved to
  const shuffledCorrectAnswer = shuffledIndices.indexOf(correctAnswer);

  return {
    shuffledOptions,
    shuffledCorrectAnswer,
  };
}

/**
 * Determine if a question should have its choices shuffled
 * Questions with visual content (images for choices or composite images) should not be shuffled
 * @param question - Quiz question object
 * @returns true if question should be shuffled, false otherwise
 */
export function shouldShuffleQuestion(question: {
  choiceImage?: string;
  compositeImage?: string;
}): boolean {
  // Don't shuffle if question has choice images or composite images
  return !question.choiceImage && !question.compositeImage;
}
