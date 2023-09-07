"use client"

import { Box, CircularProgress, SxProps } from "@mui/material";
import Header from "./Header";
import Questions from "./Questions";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getQuestionsRequest } from "@/api/question";
import { useEffect, useState } from "react";
import useManageQuestions from "./useManageQuestions";
import DeleteQuestions from "./DeleteQuestions";
import { getTopicRequest } from "@/api/topic";

const styles:SxProps ={
  width: "100%",
  minHeight: "90vh",
}

export default function Page({params}:{params:{topicId:string}}) {
  
  const topicId:number = parseInt(params.topicId);
  const results = useQueries({queries:[
    {
      queryKey: ["questions",topicId],queryFn: async () => await getQuestionsRequest(topicId),
    },
    {
      queryKey: ["topic",topicId], queryFn: async() => await getTopicRequest(topicId)
    }
  ]});

  const {filteredQuestions, initializeQuestions} = useManageQuestions();
  
  useEffect(() => {
    if(results[0].data)
      initializeQuestions(results[0].data);
  }, [results[0].data]);
  
  if(results[0].isLoading || results[1].isLoading)
    return <Box className='center' sx={styles}><CircularProgress /></Box>

  if(results[0].error || results[1].error)
    return <Box className='center' sx={styles}>Something went wrong</Box>

    
  return (
    <Box>
      <Header topic={results[1].data.topic} />
      {filteredQuestions.length !== 0 && <DeleteQuestions topicId={topicId}/>}
      <Questions questions={filteredQuestions} />
    </Box>
  )
}