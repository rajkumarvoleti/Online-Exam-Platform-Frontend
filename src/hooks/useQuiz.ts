import { useEffect, useState } from "react";
import { useRecoilState } from "recoil"
import questionsData from '@/utils/questions.json';
import { IMCQQuestion, IQuestionStatus } from "@/interfaces/questionInterfaces";
import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
import { INumberButtonType } from "@/interfaces/buttonInterfaces";

const { persistAtom } = recoilPersist()

const questionsAtom = atom<IMCQQuestion[]>({
  key: "questions",
  default: [],
  // effects_UNSTABLE: [persistAtom]
});

const questionIdAtom = atom<number>({
  key: "questionId",
  default: 0,
  // effects_UNSTABLE: [persistAtom]
});

export const useQuiz = () => {
  const [questions, setQuestions] = useRecoilState(questionsAtom);
  const [activeId, setActiveId] = useRecoilState(questionIdAtom);

  const initializeQuestions = () => {
    console.log("initializing");
    setQuestions([]);
    questionsData.forEach(questionData => {
      setQuestions(questions => [...questions,{
        id: questionData.id,
        question: questionData.question,
        options: questionData.options,
        answer: questionData.answer,
        attempted: false,
        marked: false,
        visited: false,
        response: null,
      }])
    });
  }

  const openQuestion = (id:number) => {
    console.log(id);
    setActiveId(id);
  }

  const getActiveQuestion = () => {
    return questions[activeId];
  }

  const handleResponse = (value:string | null) => {
    const updatedQuestion:IMCQQuestion = {...questions[activeId], response: value, attempted: value ? true : false};
    setQuestions(questions => [
      ...questions.slice(0,activeId),
      updatedQuestion,
      ...questions.slice(activeId+1)
    ])
  }

  const handleQuestionStatus = ({key, value}:{key:IQuestionStatus, value: boolean}) => {
    const updatedQuestion:IMCQQuestion = {...questions[activeId]};
    updatedQuestion[key] = value;
    setQuestions(questions => [
      ...questions.slice(0,activeId),
      updatedQuestion,
      ...questions.slice(activeId+1)
    ])
  }

  const visitQuestion = () => {
    handleQuestionStatus({key: "visited", value: true})
  }

  const attemptQuestion = (val:string | null) => {
    handleResponse(val);
  }

  const reviewQuestion = (val:boolean) => {
    handleQuestionStatus({key:"marked",value:val})
  }

  const handleQuestionCount = ({key1, key2}:{key1:IQuestionStatus, key2?:IQuestionStatus}) => {
    return questions.filter(question => {
      if(key2) return question[key1] && question[key2];
      return question[key1];
    }).length;
  }

  const getVisitedCount = () => {
    return handleQuestionCount({key1:"visited"});
  }

  const getUnVisitedCount = () => {
    return questions.length - getVisitedCount();
  }

  const getAttemptedCount = () => {
    return handleQuestionCount({key1:"attempted"});
  }

  const getUnAttemptedCount = () => {
    return questions.length - handleQuestionCount({key1:"attempted"});
  }

  const getMarkedForReviewCount = () => {
    return handleQuestionCount({key1:"marked"});
  }

  const getMarkedForReviewAndAttemptedCount = () => {
    return handleQuestionCount({key1: "attempted", key2: "marked"});
  }

  const getQuestionCountFromType = (type:INumberButtonType) => {
    if(type === "notVisited")
      return getUnVisitedCount();
    if(type === "responded")
      return getAttemptedCount();
    if(type === "markedForReview")
      return getMarkedForReviewCount();
    if(type === "notResponded")
      return getUnAttemptedCount();
    return getMarkedForReviewAndAttemptedCount();
  }

  const getQuestionTypeFromId = (id:number):INumberButtonType => {
    const question = questions[id];
    if(!question.visited)
      return "notVisited";
    if(question.attempted && question.marked)
      return "respondedAndMarked";
    if(question.attempted)
      return "responded";
    if(question.marked)
      return "markedForReview";
    return "notResponded";
  }

  const goToNextQuestion = () => {
    if(activeId === questions.length-1)
      return;
    openQuestion(activeId+1);
  }

  const handleSubmit = () => {
    console.log(questions);
  }

  return {
    activeQuestionNumber: activeId,
    numberOfQuestions: questions.length,
    activeQuestion: getActiveQuestion(),
    openQuestion,
    initializeQuestions,
    visitQuestion,
    attemptQuestion,
    reviewQuestion,
    getVisitedCount,
    getUnVisitedCount,
    getAttemptedCount,
    getUnAttemptedCount,
    getMarkedForReviewCount,
    getMarkedForReviewAndAttemptedCount,
    getQuestionCountFromType,
    goToNextQuestion,
    getQuestionTypeFromId,
    handleSubmit,
    isMarked: questions[activeId]?.marked || false,
    isLastQuestion: activeId === questions.length - 1 
  }
}