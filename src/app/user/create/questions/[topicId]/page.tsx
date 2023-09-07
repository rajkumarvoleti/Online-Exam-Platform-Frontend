"use client"

import { IQuestionType } from "@/interfaces/questionInterfaces";
import { Box, CircularProgress, SxProps } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import WordComponent from "@/components/WordComponent";
import AnswerComponent from "./AnswerComponent";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";
import { getTopicRequest } from "@/api/topic";

const styles:SxProps = {
  width: "100%",
}

export default function Page({params}:{params:{topicId:string}}) {

  const topicId:number = parseInt(params.topicId);
  const {data, error, isLoading} = useQuery(["topic",topicId],async() => await getTopicRequest(topicId))
  const [type, setType] = useState<IQuestionType>("trueOrFalse");
  const { handleQuestion, handleType } = useManageQuestion();

  useEffect(() => {
    handleType(type);
  }, [type])

  if(error)
    <Box>Something went wrong</Box>
  
  if(isLoading)
    <Box><CircularProgress /></Box>

  return (
    <Box sx={styles}>
      <Header topic={data?.topic} type={type} setType={setType} />
        <WordComponent value={""} handleData={handleQuestion} />
        <AnswerComponent type={type} />
      <Footer topicId={topicId} />
    </Box>
  )
}