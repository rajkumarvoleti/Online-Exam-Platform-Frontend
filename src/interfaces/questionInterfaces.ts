export interface IMCQQuestion {
  id: number,
  question: string,
  options: string[],
  answer: string,
  response: string | null,
  attempted: boolean,
  marked: boolean,
  visited: boolean,
}

export type IQuestionLevel =  "easy" | "medium" | "hard"

export type IQuestionStatus = "attempted" | "marked" | "visited";

export type IQuestionType = "trueOrFalse" | "fillInTheBlanks" | "multipleChoice" | "subjective"