"use client"

import { Box } from "@mui/material";
import Header from "./Header";
import Questions from "./Questions";
import { useQuery } from "@tanstack/react-query";
import { getQuestionsRequest } from "@/api/question";
import { useEffect } from "react";
import useManageQuestions from "./useManageQuestions";
import DeleteQuestions from "./DeleteQuestions";

export default function Page({params}:{params:{topicId:string}}) {
  
  const topicId:number = parseInt(params.topicId);
  const {data, error, isLoading} = useQuery(["questions",topicId],async () => await getQuestionsRequest(topicId))
  const {filteredQuestions, initializeQuestions} = useManageQuestions();
  
  useEffect(() => {
    initializeQuestions(data);
  }, [data])
  

  if(isLoading)
    return <p>loading</p>

  if(error)
    return <p>error</p>

  return (
    <Box>
      <Header topicId={topicId} />
      {filteredQuestions.length !== 0 && <DeleteQuestions topicId={topicId}/>}
      <Questions questions={filteredQuestions} />
    </Box>
  )
}