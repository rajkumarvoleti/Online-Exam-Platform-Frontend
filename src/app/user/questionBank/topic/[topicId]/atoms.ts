import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { IQuestionLevel, IQuestionType } from "@/interfaces/questionInterfaces";
import { atom } from "recoil";

export const questionsAtom= atom<IQuestionAndAnswer[]>({
  key: "questionBank questions",
  default: [],
}) 

export const filteredQuestionsAtom= atom<IQuestionAndAnswer[]>({
  key: "questionBank filteredQuestions",
  default: [],
}) 

export const questionNumberAtom= atom<string>({
  key: "questionBank questionNumber",
  default: "",
})

export const queryAtom= atom<string>({
  key: "questionBank query",
  default: "",
}) 

export const complexityFilterAtom= atom<IQuestionLevel[]>({
  key: "questionBank complexityFilter",
  default: ["easy","medium","hard"],
})

export const typeFilterAtom= atom<IQuestionType[]>({
  key: "questionBank typeFilter",
  default: ["fillInTheBlanks","multipleChoice","subjective","trueOrFalse"],
})

export const selectedQuestionsAtom= atom<number[]>({
  key: "questionBank selectedQuestions",
  default: [],
}) 