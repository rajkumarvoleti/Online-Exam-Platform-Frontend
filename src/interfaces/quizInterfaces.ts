import { ITime } from "@/utils/timeUtils";
import { IQuestionType } from "./questionInterfaces";

export interface IQuizData {
  time: ITime,
  started: boolean,
  ended: boolean,
}
export interface IQuizOption {
  description: string,
}

export interface IQuizQuestion {
  id: number,
  description: string,
  type: IQuestionType,
  options: IQuizOption[],
}

export interface IQuizSubject {
  numberOfQuestions: number,
  questions: IQuizQuestion[],
}

export interface IQuiz {
  id: number,
  name: string,
  description: string,
  testAvailabilityStart: string,
  testAvailabilityEnd: string,
  totalMarks: number,
  totalQuestions: number,
  totalTime: number,
  subjects: IQuizSubject[],
}

export interface IResultQuery {
  id:number,
  response: string,
}