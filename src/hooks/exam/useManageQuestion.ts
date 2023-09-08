import { IOption, IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { IQuestionLevel, IQuestionType } from "@/interfaces/questionInterfaces";
import { questionAndAnswerAtom } from "@/utils/atoms/questionAtom";
import { useRecoilState } from "recoil";
import { useToast } from "../useToast";
import { useQuestion } from "./useCreateQuestion";

export default function useManageQuestion() {
  const [questionData, setQuestionData] = useRecoilState(questionAndAnswerAtom);
  const {errorToast} = useToast();
  const { createQuestion, updateQuestion, loading } = useQuestion();

  const handleQuestion = (data: string) => {
    setQuestionData(prev => {return {...prev,question:data}});
  }
  
  const handleAnswer = (data: string) => {
    setQuestionData(prev => {return {...prev,answer:{...prev.answer, description: data}}});
  }
  
  const handleExplanation = (data: string) => {
    setQuestionData(prev => {return {...prev,answer:{...prev.answer, explanation: data}}});
  }
  
  const handleComplexity = (data: IQuestionLevel) => {
    setQuestionData(prev => {return {...prev,complexity:data}});
  }
  
  const handleType = (data: IQuestionType) => {
    setQuestionData(prev => {return {...prev,answer:{...prev.answer, type: data}}});
  }
  
  const handleOptions = ( data: IOption[] ) => {
    setQuestionData(prev => {return {...prev,answer:{...prev.answer, options: data}}});
  }

  const validateMcq = () => {
    const isValid = questionData.answer.options.find(option => option.isCorrect === true);
    return isValid;
  }

  const handleManySubmit = ({topicId, values}:{topicId:number, values:IQuestionAndAnswer[]}) => {
    
  }

  const handleSubmit = (topicId:number) => {
    const answerData = {...questionData.answer};
    console.log(answerData);
    if(answerData.type === "trueOrFalse"){
      if(answerData.description !== "false" && answerData.description !== "true"){
        errorToast({msg:"Please select either true or false"});
        return;
      }
    }
    if(answerData.type === "multipleChoice" && answerData.options.length === 0){
      errorToast({msg:"Please create atleast one choice"});
      return;
    }
    if(answerData.type !== "multipleChoice")
      answerData.options = [];
    else if(!validateMcq()){
      errorToast({msg:"Please make sure that atleast one option is correct"});
      return;
    }
    const newQuestionData = {...questionData,answer:answerData, topicId}
    createQuestion(newQuestionData);
  }

  const handleUpdate = (questionId:number) => {
    const answerData = {...questionData.answer};
    console.log(answerData);
    if(answerData.type === "trueOrFalse"){
      if(answerData.description !== "false" && answerData.description !== "true"){
        errorToast({msg:"Please select either true or false"});
        return;
      }
    }
    if(answerData.type === "multipleChoice" && answerData.options.length === 0){
      errorToast({msg:"Please create atleast one choice"});
      return;
    }
    if(answerData.type !== "multipleChoice")
      answerData.options = [];
    else if(!validateMcq()){
      errorToast({msg:"Please make sure that atleast one option is correct"});
      return;
    }
    console.log("updating");
    const newQuestionData = {...questionData,answer:answerData}
    console.log(newQuestionData);
    updateQuestion({questionData:newQuestionData,id:questionId});
  }

  return {loading, handleAnswer, handleQuestion, handleOptions, handleSubmit, handleExplanation, handleComplexity, handleType, handleUpdate };

}