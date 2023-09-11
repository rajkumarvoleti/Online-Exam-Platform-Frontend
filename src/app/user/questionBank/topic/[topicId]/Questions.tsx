import { Box, SxProps } from "@mui/material";
import Question from "./Question";
import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";

const styles:SxProps = {
  padding: "10px 5px",
  "> *":{
    margin: "30px 0",
  },
  ".icons":{
    padding: "0 10px",
  },
  ".questionNumber":{
    display: "flex",
    alignItems: "center",
    mr: "30px",
    padding:" 3px 0px",

    ".desc":{
      marginLeft: "auto",
      display: "flex",
      gap: "10px",
    },
  },
  ".questionNumber h4":{
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#575757"
  }
}

export default function Questions({questions}:{questions:IQuestionAndAnswer[]}) {
  return (
    <Box sx={styles}>
      {questions.length === 0 && <p>No Questions to display</p>}
      {questions.map((question:IQuestionAndAnswer, i:number) => (
        <Question key={i} question={question} />
      ))}
    </Box>
  )

}