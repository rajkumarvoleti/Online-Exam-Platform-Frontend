import useManageQuestion from "@/hooks/exam/useManageQuestion";
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

export default function FillInTheBlanksComponent() {

  const [value, setValue] = useState<string>("");
  const { handleAnswer } = useManageQuestion();

  useEffect(() => {
    handleAnswer(value);
  },[value])

  return (
    <Box sx={styles}>
      <Box className="inputBox">
        <InputLabel className="label">Answer :</InputLabel>
        <OutlinedInput onChange={(e:any) => setValue(e.target.value)} className="input" />
      </Box>
    </Box>
  )
}