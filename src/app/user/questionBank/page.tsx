"use client"

import { useQuestion } from "@/hooks/exam/useCreateQuestion"
import { mcqQuestions } from "@/utils/mcqQuestions";
import { Box, Button, SxProps } from "@mui/material"

const styles: SxProps = {
  h4:{
    margin: "10px",
  }
}


export default function Page() {

  const {createQuestions} = useQuestion();

  const handleCreateMany = () => {
    createQuestions(mcqQuestions);
  }
  
  return (
    <Box sx={styles}>
      <h4>Please Select a subject</h4>
      {/* <Button onClick={handleCreateMany}>Create a lot of questions</Button> */}
    </Box>
  )
}