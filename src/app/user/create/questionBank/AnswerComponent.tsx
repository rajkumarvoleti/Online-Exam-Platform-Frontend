import { Box, FormControl, FormControlLabel, InputLabel, Radio, RadioGroup, SxProps, TextField } from "@mui/material";
import TrueOrFalseComponent from "./TrueOrFalseComponent";
import FillInTheBlanksComponent from "./FillInTheBlanksComponent";
import MCQComponent from "./MCQComponent";
import { IQuestionType } from "@/interfaces/questionInterfaces";
import useManageQuestion from "@/hooks/exam/useManageQuestion";

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
    ".textField": {
      width: "100%",
    },
    ".textField input": {
      width: "100%",
      height: "215.696px",
    },
  },
}

export default function AnswerComponent({ type }: { type: IQuestionType }) {

  const { handleExplanation } = useManageQuestion();

  const handleChange = (e:any) => {
    console.log(e.target.value);
    handleExplanation(e.target.value);
  }

  return (
    <Box sx={styles}>
      <Box className="heading">
        <h4>Correct Answer</h4>
      </Box>
      {type === "trueOrFalse" && <TrueOrFalseComponent />}
      {type === "fillInTheBlanks" && <FillInTheBlanksComponent />}
      {type === "multipleChoice" && <MCQComponent />}
      <Box className="explanation">
        <InputLabel className="label">Explanation</InputLabel>
        <TextField onChange={handleChange} className="textField" />
      </Box>
    </Box>
  )
}