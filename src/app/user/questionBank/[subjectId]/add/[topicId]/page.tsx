"use client"

import { IQuestionType } from "@/interfaces/questionInterfaces";
import { Box, SxProps } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import WordComponent from "@/components/WordComponent";
import AnswerComponent from "./AnswerComponent";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import Footer from "./Footer";

const styles:SxProps = {
  width: "100%",
}

export default function Page({params}:{params:{topicId:string}}) {

  const topicId:number = parseInt(params.topicId);
  const [type, setType] = useState<IQuestionType>("trueOrFalse");
  const { handleQuestion, handleType } = useManageQuestion();

  useEffect(() => {
    handleType(type);
  }, [type])
  

  return (
    <Box sx={styles}>
      <Header type={type} setType={setType} />
        <WordComponent value={""} handleData={handleQuestion} />
        <AnswerComponent type={type} />
      <Footer topicId={topicId} />
    </Box>
  )
}