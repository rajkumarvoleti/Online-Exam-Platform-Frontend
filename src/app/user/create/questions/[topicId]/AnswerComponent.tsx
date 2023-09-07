import { Box, InputLabel, OutlinedInput, Radio, RadioGroup, SxProps, TextField } from "@mui/material";
import TrueOrFalseComponent from "./TrueOrFalseComponent";
import FillInTheBlanksComponent from "./FillInTheBlanksComponent";
import MCQComponent from "./MCQComponent";
import { IQuestionType } from "@/interfaces/questionInterfaces";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { useEffect, useState } from "react";

const styles: SxProps = {
  ".heading": {
    background: "#F4F5F9",
    display: "flex",
    alignItems: "center",
    pl: "20px",
  },
  ".explanation": {
    margin: "20px",
    ".label": {
      margin: "10px 0",
      color: "#000",
      fontSize: "20px",
      lineHeight: "24.542px", /* 122.711% */
    },
    ".input": {
      display: "flex",
      alignItems: "start",
      width: "100%",
      height: "200px",
    },
    ".input input": {
      width: "100%",
      margin: "10px 0"
    },
  },
}

export default function AnswerComponent({ type }: { type: IQuestionType }) {

  const { handleExplanation } = useManageQuestion();
  const [explanation, setExplanation] = useState("");

  const handleChange = (e:any) => {
    setExplanation(e.target.value);
  }

  useEffect(() => {
    handleExplanation(explanation);
  }, [explanation])
  
  
  return (
    <Box sx={styles}>
      <Box className="heading">
        <h4>Correct Answer</h4>
      </Box>
      {type === "trueOrFalse" && <TrueOrFalseComponent />}
      {type === "fillInTheBlanks" && <FillInTheBlanksComponent />}
      {type === "subjective" && <FillInTheBlanksComponent />}
      {type === "multipleChoice" && <MCQComponent />}
      <Box className="explanation">
        <InputLabel className="label">Explanation</InputLabel>
        <OutlinedInput value={explanation} onChange={handleChange} className="input" />
      </Box>
    </Box>
  )
}