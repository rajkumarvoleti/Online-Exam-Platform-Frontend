import { IQuestionAndAnswer, ITopic } from "@/interfaces/examInterfaces";
import { atom } from "recoil";

export const defaultQuestionAndAnswer:IQuestionAndAnswer = {
  question: "",
  complexity: "easy",
  answer: {
    description: "",
    explanation: "",
    options: [],
    type: "fillInTheBlanks"
  }
};

export const questionAndAnswerAtom = atom<IQuestionAndAnswer>({
  key: "questionAndAnswer",
  default: {
    question: "",
    complexity: "easy",
    answer: {
      description: "",
      explanation: "",
      options: [],
      type: "subjective"
    }
  },
});

export const activeTopic = atom<ITopic | null>({
  key: "activeTopic",
  default: null
})