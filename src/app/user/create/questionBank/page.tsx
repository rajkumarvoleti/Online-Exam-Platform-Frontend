"use client"

import { Box, SxProps } from "@mui/material"
import SideBar from "./SideBar"
import Header from "./Header"
import WordComponent from "@/components/WordComponent"
import AnswerComponent from "./AnswerComponent"
import Footer from "./Footer"
import { IQuestionType } from "@/interfaces/questionInterfaces"
import { useState } from "react"

const styles:SxProps = {
  display: "flex",
  ">*":{
    // margin: "10px",
  },
}

export default function Page(){

  const [type, setType] = useState<IQuestionType>("trueOrFalse")

  return (
    <Box sx={styles}>
      <SideBar />
      <Box className="main">
        <Header type={type} setType={setType} />
        <WordComponent />
        <AnswerComponent type={type} />
        <Footer />
      </Box>
    </Box>
  )
}