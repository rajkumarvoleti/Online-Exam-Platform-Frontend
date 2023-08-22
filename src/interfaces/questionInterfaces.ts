export interface IQuestion {
  id: number,
  question: string,
  type: IQuestionType,
  options: string[],
  answer: string,
  response: string | null,
  attempted: boolean,
  marked: boolean,
  visited: boolean,
  questionId: number,
}

export type IQuestionLevel =  "easy" | "medium" | "hard"

export type IQuestionStatus = "attempted" | "marked" | "visited";

export type IQuestionType = "trueOrFalse" | "fillInTheBlanks" | "multipleChoice" | "subjective"