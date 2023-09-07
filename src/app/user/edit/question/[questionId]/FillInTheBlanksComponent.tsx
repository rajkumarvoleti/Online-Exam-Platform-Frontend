import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IAnswer } from "@/interfaces/examInterfaces";
import { Box, InputLabel, OutlinedInput, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const styles:SxProps = {
  padding: "20px",
  ".inputBox":{
    display: "flex",
    alignItems:"center",
    gap: "10px",
    ".input":{
      maxWidth: "300px",
      height: "43px",
    },
    ".label":{
      color: "#000",
      fontSize: "18px",
    }
  }
}

export default function FillInTheBlanksComponent({defaultAnswer}:{defaultAnswer:IAnswer}) {

  const [value, setValue] = useState<string>(defaultAnswer?.description || "");
  const { handleAnswer } = useManageQuestion();

  const handleValue = (e:any) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    setValue(defaultAnswer.description)
  }, [defaultAnswer.description])
  

  useEffect(() => {
    handleAnswer(value);
  },[value])

  return (
    <Box sx={styles}>
      <Box className="inputBox">
        <InputLabel className="label">Answer :</InputLabel>
        <OutlinedInput value={value} onChange={handleValue} className="input" />
      </Box>
    </Box>
  )
}