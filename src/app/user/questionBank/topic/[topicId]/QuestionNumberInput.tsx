import { SxProps, TextField } from "@mui/material";

const styles:SxProps = {
  width: "70px",
  "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    "margin": "0",
  },
  "input[type=number]": {
    "-moz-appearance": "textfield",
  }
}

export default function QuestionNumberInput({setQuestionNumber}:{setQuestionNumber:(val:string) => void}) {

  const handleChange = (e:any) => {
    setQuestionNumber(e.target.value);
  }

  return (
    <TextField sx={styles} onChange={handleChange} type="number" placeholder="Q.No" />
  )
}