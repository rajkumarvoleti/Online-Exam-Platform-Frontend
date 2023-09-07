"use client"

import {useEffect} from 'react';
import { getExamRequest } from "@/api/exam";
import { useQuiz } from "@/hooks/useQuiz";
import { IQuizQuestion, IQuizSubject } from "@/interfaces/quizInterfaces";
import { Box, Button, CircularProgress, SxProps } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from 'next-nprogress-bar';

const styles:SxProps = {
  width: "100vw",
  height: "100vh",
}

export default function Page({params}:{params:{examId:string}}) {
  const examId = parseInt(params.examId);
  const { startExam, initializeQuestions } = useQuiz();
  const {data, error, isLoading} = useQuery(["exam",examId],async () => await getExamRequest(examId));
  const router = useRouter();

  useEffect(() => {
    if(!data || !data.exam)
      return;
    var questions:IQuizQuestion[] = data.exam.questions;
    console.log(data);
    initializeQuestions(questions);
  }, [data])  

  if(error)
    return <Box className='center' sx={styles}>Something went wrong</Box>
  
  if(isLoading)
    return <Box className='center' sx={styles}><CircularProgress /></Box>
  
  const handleClick = () =>{
    if(!data.exam)
      return;
    console.log(data.exam.testDuration);
    startExam(data.exam.testDuration);
    router.push(`/quiz/exam/${examId}`);
  }

  return (
    <Box sx={styles} className="center">
      <p>Intorduction</p>
      <Button onClick={handleClick}>Start</Button>
    </Box>
  )
}