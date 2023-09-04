"use client"

import { Box, CircularProgress, SxProps } from "@mui/material";
import Header from "./Header";
import Questions from "./Questions";
import { useQuery } from "@tanstack/react-query";
import { getQuestionsRequest } from "@/api/question";
import { useEffect } from "react";
import useManageQuestions from "./useManageQuestions";
import DeleteQuestions from "./DeleteQuestions";

const styles:SxProps ={
  width: "100%",
  minHeight: "90vh",
}

export default function Page({params}:{params:{topicId:string}}) {
  
  const topicId:number = parseInt(params.topicId);
  const {data, error, isLoading} = useQuery(["questions",topicId],async () => await getQuestionsRequest(topicId))
  const {filteredQuestions, initializeQuestions} = useManageQuestions();
  
  useEffect(() => {
    initializeQuestions(data);
  }, [data])
  
  if(isLoading)
    return <Box className='center' sx={styles}><CircularProgress /></Box>

  if(error)
    return <Box className='center' sx={styles}>Something went wrong</Box>

  return (
    <Box>
      <Header topicId={topicId} />
      {filteredQuestions.length !== 0 && <DeleteQuestions topicId={topicId}/>}
      <Questions questions={filteredQuestions} />
    </Box>
  )
}