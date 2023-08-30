"use client"

import { Box, LinearProgress, SxProps } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import ExamNavigationCard from "./ExamNavigationCard";
import { ITime } from "@/utils/timeUtils";
import { useTimer } from "@/hooks/useTimer";
import Question from "./Question";
import { quizAtom, useQuiz } from "@/hooks/useQuiz";
import { useEffect } from "react";
import { IQuiz, IQuizQuestion, IQuizSubject } from "@/interfaces/quizInterfaces";
import { useRecoilValue } from "recoil";

const styles:SxProps = {
  minHeight: "100vh",
  position: "relative",
  ".head":{
    position: "sticky",
    top: 0,
    zIndex: 2,
  },
  ".progress":{
    height: "5px"
  },
  ".main":{
    display: "flex",
    minHeight: "81.5vh",
  },
}

export default function Exam({exam}:{exam:IQuiz}) {

  const {time:initialTime} = useRecoilValue(quizAtom);
  const time = useTimer(initialTime);
  const { updateTime} = useQuiz();

  useEffect(() => {
    updateTime(time);
  }, [time])
  

  if(!exam)
    return;

  return (
    <Box sx={styles}>
      <Box className="head">
        <Header time={time} />
        <LinearProgress variant="determinate" value={75} />
      </Box>
      <Box className="main">
        <Question />
        <ExamNavigationCard time={time} />
      </Box>
      <Footer examId={exam.id} />
    </Box>
  )
}