
export type Screen = 'start' | 'quiz' | 'result';

export type AnswerType = 'A' | 'B' | 'C' | 'D';

export interface QuizOption {
  text: string;
  type: AnswerType;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface Podcast {
  name: string;
  image?: string;
  link?: string;
}

export interface Result {
  title: string;
  icon: string;
  description: string;
  podcasts: Podcast[];
}

export type ResultType = keyof typeof import('./constants').RESULTS;
