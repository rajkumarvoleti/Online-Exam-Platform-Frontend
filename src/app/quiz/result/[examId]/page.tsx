"use client"

import { getResultRequest } from "@/api/exam";
import { quizAtom, useQuiz } from "@/hooks/useQuiz";
import { Box, Button, CircularProgress, SxProps } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const styles:SxProps = {
  flexDirection:"column",
  width: "100vw",
  height: "100vh",
}

export default function Page({params}:{params:{examId:string}}) {
  const examId = parseInt(params.examId);
  const {ended} = useRecoilValue(quizAtom);
  const {getResponses} = useQuiz();
  const responses = getResponses();
  console.log(responses);
  const {data, error, isLoading} = useQuery(["result",examId],async () => await getResultRequest(responses));

  const router = useRouter();

  useEffect(() => {
    if(!ended)
      router.push(`/quiz/intro/${examId}`);
  }, [ended])
  
  const sendToDashBoard = () => {
    router.push("/user/dashboard");
  }

  if(isLoading)
    return <Box className='center' sx={styles}><CircularProgress /></Box>
  
  if(error)
    return <Box className='center' sx={styles}>Something went wrong</Box>
  
  return (
    <Box sx={styles} className="center">
      <p>Result: {data.score}/{responses.length}</p>
      <Button onClick={sendToDashBoard} variant="contained">Return To dashboard</Button>
    </Box>
  )
}