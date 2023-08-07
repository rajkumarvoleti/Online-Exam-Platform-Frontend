import { IQuestionType } from "@/interfaces/questionInterfaces";
import { questionAndAnswerAtom } from "@/utils/atoms/questionAtom";
import { useRecoilState } from "recoil";

export default function useManageQuestion() {
  const [questionData, setQuestionData] = useRecoilState(questionAndAnswerAtom);

  const handleQuestion = (data: string) => {
    const newQuestionData = questionData;
    newQuestionData.question = data;
    setQuestionData(newQuestionData);
  }

  const handleAnswer = (data: string) => {
    const newQuestionData = questionData;
    newQuestionData.answer.answer = data;
    setQuestionData(newQuestionData);
  }

  const handleExplanation = (data: string) => {
    const newQuestionData = questionData;
    newQuestionData.answer.explanation = data;
    setQuestionData(newQuestionData);
  }

  const handleOptions = ({ data, index }: { data: string, index: number }) => {
    const newQuestionData = questionData;
    newQuestionData.answer.options[index] = data;
    setQuestionData(newQuestionData);
  }

  const handleSubmit = (type: IQuestionType) => {
    const newQuestionData = questionData;
    newQuestionData.answer.type = type;
    setQuestionData(newQuestionData);
    console.log(newQuestionData);
  }

  return { handleAnswer, handleQuestion, handleOptions, handleSubmit, handleExplanation };

}