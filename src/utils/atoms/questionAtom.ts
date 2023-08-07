import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { atom } from "recoil";

export const questionAndAnswerAtom = atom<IQuestionAndAnswer>({
  key: "questionAndAnswer",
});