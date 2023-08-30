"use client"

import { getResultRequest } from "@/api/exam";
import { quizAtom, useQuiz } from "@/hooks/useQuiz";
import { Box, SxProps } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";
import { useRecoilValue } from "recoil";

const styles:SxProps = {
  width: "100vw",
  height: "100vh",
}

export default function Page({params}:{params:{examId:string}}) {
  const examId = parseInt(params.examId);
  const {ended} = useRecoilValue(quizAtom);
  const {getResponses} = useQuiz();
  const responses = getResponses();
  const {data, error, isLoading} = useQuery(["result",examId],async () => await getResultRequest(responses));

  const router = useRouter();

  useEffect(() => {
    if(!ended)
      router.push(`/quiz/intro/${examId}`);
  }, [ended])
  
  if(isLoading)
    return <p>loading...</p>
  
  if(error)
    return <p>Something went wrong</p>
  
  return (
    <Box sx={styles} className="center">
      <p>Result: {data.score}/{responses.length}</p>
    </Box>
  )
}