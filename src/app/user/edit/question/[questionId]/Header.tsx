import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IQuestionLevel, IQuestionType } from "@/interfaces/questionInterfaces";
import { Box, Card, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const styles:SxProps = {
  display: "flex",
  flexWrap: "wrap",
  padding: "10px 20px",
  alignItems: "center",
  borderRadius:"none",
  justifyContent: "space-between",
  width: "100%",
  ".options":{
    display: "flex",
    gap: "10px",
  },
  ".select":{
    width: "234px",
    height: "34px",
    borderRadius: "5px",
  },
  ".label":{
    fontSize: "14px",
    color:"#575757",
    margin:"0"
  },
  ".heading":{
    fontSize:"20px",
    fontWeight:"550",
    color:"#2200a5",

  }

}

export default function Header({type,setType, level}:{type:IQuestionType, setType:(t:IQuestionType) => any, level: IQuestionLevel}) {

  const [difficulty, setDifficulty] = useState<IQuestionLevel>(level);
  const { handleComplexity } = useManageQuestion();

  const handleDifficulty = (e:SelectChangeEvent) => {
    setDifficulty(e.target.value as IQuestionLevel);
  }

  const handleType = (e:SelectChangeEvent) => {
    setType(e.target.value as IQuestionType);
  }

  useEffect(() => {
    setDifficulty(level);
  }, [level])
  

  useEffect(() => {
    handleComplexity(difficulty);
  }, [difficulty])
  

  return (
    <Card sx={styles}>
      <span className="heading">Update Question</span>
      <Box className="options">
        <Box className="option">
          <InputLabel className="label">Question Level</InputLabel>
          <Select className="select" onChange={handleDifficulty} value={difficulty}>
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
        </Box>
        <Box className="option">
          <InputLabel className="label">Question Type</InputLabel>
          <Select className="select" onChange={handleType} value={type}>
            <MenuItem value={"trueOrFalse"}>True Or False</MenuItem>
            <MenuItem value={"fillInTheBlanks"}>Fill in the Blanks</MenuItem>
            <MenuItem value={"multipleChoice"}>Multiple Choice</MenuItem>
            <MenuItem value={"subjective"}>Subjective</MenuItem>
          </Select>
        </Box>
      </Box>
    </Card>
  )
}