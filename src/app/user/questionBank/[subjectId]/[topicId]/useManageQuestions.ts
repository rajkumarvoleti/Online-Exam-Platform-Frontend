import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { IQuestionLevel, IQuestionType } from "@/interfaces/questionInterfaces";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { complexityFilterAtom, filteredQuestionsAtom, queryAtom, questionNumberAtom, questionsAtom, selectedQuestionsAtom, typeFilterAtom } from "./atoms";

export default function useManageQuestions() {

  const [questions, setQuestions] = useRecoilState(questionsAtom);
  const [filteredQuestions, setFilteredQuestions] = useRecoilState(filteredQuestionsAtom);
  const [questionNumber, setQuestionNumber] = useRecoilState(questionNumberAtom);
  const [query, setQuery] = useRecoilState(queryAtom);
  const [complexityFilter, setComplexityFilter] = useRecoilState(complexityFilterAtom);
  const [typeFilter, setTypeFilter] = useRecoilState(typeFilterAtom);
  const [selectedQuestions, setSelectedQuestions] = useRecoilState(selectedQuestionsAtom);

  const initializeQuestions = (data:any) => {
    if(!data)
      return;
    setQuestions(prev => data.questions);
    setFilteredQuestions(prev => data.questions);
    setTypeFilter(prev => ["fillInTheBlanks","multipleChoice","subjective","trueOrFalse"]);
    setComplexityFilter(prev => ["easy","medium","hard"]);
    setQuestionNumber(prev => "");
    setQuery(prev => "");
  }
  

  useEffect(() => {
    const newQuestions = questions.filter((question:IQuestionAndAnswer) => {
      const queryString = query.toLowerCase();
      const inQuestion = question.question.toLowerCase().includes(queryString);
      const inAnswer = question.answer.description.toLowerCase().includes(queryString);
      const inOptions = question.answer.options.find(opt => opt.description.toLowerCase().includes(queryString));
      return inQuestion || inAnswer || inOptions;
    })
    setFilteredQuestions(prev => newQuestions);
  }, [query, questions])
  
  useEffect(() => {
    if(questionNumber === "") {
      setFilteredQuestions(prev => questions);
      return;
    }
    const newQuestion = questions.find((question:IQuestionAndAnswer) => question.questionNumber === parseInt(questionNumber));
    if(newQuestion)
    setFilteredQuestions(prev => [newQuestion]);
  else
  setFilteredQuestions(prev => []);
  }, [questionNumber, questions])
  

  const toggleComplexity = (complexity:IQuestionLevel) => {
    if(complexityFilter.includes(complexity))
      setComplexityFilter(prev => prev.filter(val => val !== complexity));
    else
      setComplexityFilter(prev => [...prev,complexity]);
  }

  const toggleType = (type:IQuestionType) => {
    if(typeFilter.includes(type))
      setTypeFilter(prev => prev.filter(val => val !== type));
    else
      setTypeFilter(prev => [...prev,type]);
  }

  useEffect(() => {
    const newQuestions = questions.filter((question:IQuestionAndAnswer) => {
      return complexityFilter.includes(question.complexity) && typeFilter.includes(question.answer.type);
    });
    setFilteredQuestions(prev => newQuestions);
  }, [complexityFilter,typeFilter, questions]);
  
  const addQuestion = (id:number) => {
    setSelectedQuestions(prev => [...prev,id]);
  }

  const removeQuestion = (id:number) => {
    setSelectedQuestions(prev => prev.filter(val => val !== id));
  }

  const toggleQuestion = (id:number) => {
    if(selectedQuestions.includes(id))
      removeQuestion(id);
    else
      addQuestion(id);
  }

  const addAllQuestions = () => {
    const ids:number[] = filteredQuestions.map(question => question.questionId || 1);
    setSelectedQuestions(ids);
  }

  const removeAllQuestions = () => {
    setSelectedQuestions([]);
  }

  return {filteredQuestions, initializeQuestions, setQuestionNumber, setQuery, toggleComplexity, complexityFilter, toggleType, typeFilter, selectedQuestions, addAllQuestions, removeAllQuestions, addQuestion, removeQuestion, toggleQuestion};
}