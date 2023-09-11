import { Box, InputLabel, OutlinedInput, SxProps } from "@mui/material";
import TrueOrFalseComponent from "./TrueOrFalseComponent";
import FillInTheBlanksComponent from "./FillInTheBlanksComponent";
import MCQComponent from "./MCQComponent";
import { IQuestionType } from "@/interfaces/questionInterfaces";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IAnswer } from "@/interfaces/examInterfaces";
import { useEffect } from "react";

const styles: SxProps = {
  ".heading": {
    background: "#F4F5F9",
    display: "flex",
    alignItems: "center",
    p: "10px 20px",
    fontSize:"20px",
    color:"#2200a5",
    fontWeight:"550"

  },
  ".explanation": {
    margin: "20px",
    ".label": {
      margin: "3px 0",
      color: "#000",
      fontSize: "16px",
      lineHeight: "24.542px", /* 122.711% */
    },

    ".input": {
      display: "flex",
      alignItems: "start",
      width: "100%",
      height: "140px",
      borderRadius:"3px"
    },
    ".input input": {
      width: "100%",
      margin: "10px 0"
    },
  },
}

export default function AnswerComponent({ type, answer }: { type: IQuestionType, answer:IAnswer }) {

  const { handleExplanation } = useManageQuestion();

  const handleChange = (e:any) => {
    handleExplanation(e.target.value);
  }

  useEffect(() => {
    if(!answer)
      return;
    handleExplanation(answer.explanation);
  }, [answer])
  

  return (
    <Box sx={styles}>
      <Box >
        <span className="heading">Correct Answer</span>
      </Box>
      {type === "trueOrFalse" && <TrueOrFalseComponent defaultAnswer={answer} />}
      {type === "fillInTheBlanks" && <FillInTheBlanksComponent defaultAnswer={answer} />}
      {type === "subjective" && <FillInTheBlanksComponent defaultAnswer={answer} />}
      {type === "multipleChoice" && <MCQComponent defaultAnswer={answer} />}
      <Box className="explanation">
        <InputLabel className="label">Explanation</InputLabel>
        <OutlinedInput value={answer?.explanation} onChange={handleChange} className="input" />
      </Box>
    </Box>
  )
}