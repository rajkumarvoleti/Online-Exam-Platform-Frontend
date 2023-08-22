"use client"

import { IQuestionType } from "@/interfaces/questionInterfaces";
import { Box, SxProps } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import WordComponent from "@/components/WordComponent";
import AnswerComponent from "./AnswerComponent";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import Footer from "./Footer";
import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { useQuery } from "@tanstack/react-query";
import { getQuestionRequest } from "@/api/question";

const styles:SxProps = {
  width: "100%",
}

export default function Page({params}:{params:{questionId:string}}) {

  const [question, setQuestion] = useState<IQuestionAndAnswer | null>(null);
  const questionId:number = parseInt(params.questionId);
  const {data, error, isLoading} = useQuery(["question",questionId],async () => await getQuestionRequest(questionId));

  const [type, setType] = useState<IQuestionType>("trueOrFalse");
  const { handleQuestion, handleType } = useManageQuestion();

  useEffect(() => {
    handleType(type);
  }, [type])
  

  useEffect(() => {
    if(!data?.question)
      return;
    setQuestion(data.question);
    setType(data.question.answer.type);
  }, [data])
  
  if(error)
    return <p>Something went wrong</p>
  
  if(isLoading)
    return <p>loading...</p>
  
  if(!question)
    return <></>

  return (
    <Box sx={styles}>
      <Header level={question.complexity} type={type} setType={setType} />
        <WordComponent value={question.question} handleData={handleQuestion} />
        <AnswerComponent answer={question.answer} type={type} />
      <Footer questionId={questionId} />
    </Box>
  )
}