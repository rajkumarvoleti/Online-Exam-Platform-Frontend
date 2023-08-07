import { IQuestionType } from "./questionInterfaces"

export interface ITopic {
  id?: number
  name: string
  description: string
  subjectId: number
}

export interface ISubject {
  id?: number,
  name: string,
  description: string
  topics: ITopic[]
}

export interface IAnswer {
  type: IQuestionType,
  answer: string,
  options: string[],
  explanation: string,
}

export interface IQuestionAndAnswer {
  question: string,
  answer: IAnswer,
}