import { useRecoilState } from "recoil"
import { IQuestion, IQuestionStatus } from "@/interfaces/questionInterfaces";
import { atom } from "recoil";
import { INumberButtonType } from "@/interfaces/buttonInterfaces";
import { IQuizData, IQuizQuestion, IResultQuery } from "@/interfaces/quizInterfaces";
import { ITime, getTimeFromSeconds } from "@/utils/timeUtils";
import { recoilPersist } from 'recoil-persist'
import { useRouter } from "next-nprogress-bar";

const { persistAtom } = recoilPersist()

const questionsAtom = atom<IQuestion[]>({
  key: "questions",
  default: [],
  effects_UNSTABLE: [persistAtom]
});

const questionIdAtom = atom<number>({
  key: "questionId",
  default: 0,
  // effects_UNSTABLE: [persistAtom]
});

export const quizAtom = atom<IQuizData>({
  key: "quizData",
  default: {
    time: getTimeFromSeconds(0),
    started: false,
    ended: false,
  },
  effects_UNSTABLE: [persistAtom]
});

export const useQuiz = () => {
  const [questions, setQuestions] = useRecoilState(questionsAtom);
  const [activeId, setActiveId] = useRecoilState(questionIdAtom);
  const [quizData, setQuizData] = useRecoilState(quizAtom);
  const router = useRouter();

  const startExam = (time:number) => {
    console.log(quizData);
    if(quizData.started)
      return;
    setQuizData(prev => ({...prev,started: true, time: {hours: 0, minutes: time, seconds: 0}}));
  }

  const updateTime = (time:ITime) => {
    setQuizData(prev => ({...prev,time: time}));
  }

  const endExam = () => {
    setQuizData(prev => ({...prev,ended: true}));
    setQuestions([]);
    setActiveId(0);
    setQuizData({time: getTimeFromSeconds(0),
    started: false,
    ended: false,})
  }

  const resetExam = () => {
    console.log("resetting");
    setQuestions(prev => []);
    setQuizData(prev => ({ended: false, started: false, time: {hours:0,minutes:0,seconds:0}}))
  }

  const initializeQuestions = (questionsData:IQuizQuestion[]) => {
    console.log(questions.length);
    if(questions.length !== 0)
      return;
    console.log("initializing");
    questionsData.forEach((questionData, i) => {
      setQuestions(questions => [...questions,{
        questionId:questionData.id,
        id: i+1,
        type: questionData.type,
        question: questionData.description,
        options: questionData.options.map(option => option.description),
        answer: "",
        attempted: false,
        marked: false,
        visited: false,
        response: null,
      }])
    });
  }

  const openQuestion = (id:number) => {
    setActiveId(id);
  }

  const getActiveQuestion = () => {
    return questions[activeId];
  }

  const handleResponse = (value:string | null) => {
    const updatedQuestion:IQuestion = {...questions[activeId], response: value, attempted: value ? true : false};
    setQuestions(questions => [
      ...questions.slice(0,activeId),
      updatedQuestion,
      ...questions.slice(activeId+1)
    ])
  }

  const handleQuestionStatus = ({key, value}:{key:IQuestionStatus, value: boolean}) => {
    const updatedQuestion:IQuestion = {...questions[activeId]};
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

  const goToPrevQuestion = () => {
    if(activeId === 0)
      return;
    openQuestion(activeId-1);
  }

  const handleSubmit = () => {
    setQuizData(prev => ({...prev, ended: true}));
    console.log(questions);
  }

  const getResponses = () => {
    const responses:IResultQuery[] = questions.map((question) => ({id:question.questionId, response:question.response || ""}));
    return responses;
  }

  return {
    getResponses,
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
    isLastQuestion: activeId === questions.length - 1,
    isFirstQuestion: activeId === 0,
    startExam,
    endExam,
    resetExam,
    updateTime,
    goToPrevQuestion
  }
}