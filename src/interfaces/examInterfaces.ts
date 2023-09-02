import { IQuestionLevel, IQuestionType } from "./questionInterfaces"

export interface ITopic {
  id?: number
  name: string
  description: string
  subjectId: number,
  questionsCount: number,
}

export interface ISubject {
  id?: number,
  name: string,
  description: string
  topicsCount: number
}

export interface IOption {
  description: string,
  isCorrect: boolean
}

export interface IAnswer {
  type: IQuestionType,
  description: string,
  options: IOption[],
  explanation: string,
}

export interface IQuestionAndAnswer {
  questionNumber?: number,
  questionId?: number,
  topicId?: number,
  complexity: IQuestionLevel,
  question: string,
  answer: IAnswer,
}

export interface IExamTopic {
  topicId: number,
  numberOfQuestions: number,

}

export interface IExamSubject {
  subjectId: number,
  topics: IExamTopic[],
  numberOfQuestions: number,
  questionIds?: number[],
}

export interface IExam {
  id?: number,
  name: string,
  description: string,
  testAvailabilityStart: Date,
  testAvailabilityEnd: Date,
  totalTime: number,
  totalMarks: number,
  totalQuestions: number,
  subjectIds: number[],
  userId:number,
}
