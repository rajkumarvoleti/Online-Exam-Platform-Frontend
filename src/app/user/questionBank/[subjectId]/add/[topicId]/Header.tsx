import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IQuestionLevel, IQuestionType } from "@/interfaces/questionInterfaces";
import { Box, Card, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const styles:SxProps = {
  display: "flex",
  flexWrap: "wrap",
  padding: "10px 20px",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  ".options":{
    display: "flex",
    gap: "10px",
  },
  ".select":{
    width: "180px",
    height: "40px",
    borderRadius: "7px",
    border: "1px solid #C2E830",
  },
  ".label":{
    color: "#000",
    fontSize: "16px",
  }
}

export default function Header({type,setType}:{type:IQuestionType, setType:(t:IQuestionType) => any}) {

  const searchParams = useSearchParams();
  const [difficulty, setDifficulty] = useState<IQuestionLevel>("easy");
  const { handleComplexity } = useManageQuestion();

  const handleQuestionDifficulty = (e:SelectChangeEvent) => {
    setDifficulty(e.target.value as IQuestionLevel);
  }

  const handleQuestionType = (e:SelectChangeEvent) => {
    setType(e.target.value as IQuestionType);
  }

  useEffect(() => {
    handleComplexity(difficulty);
  }, [difficulty])

  return (
    <Card sx={styles}>
      <h4>Create a New Question For {searchParams.get("topicName")}</h4>
      <Box className="options">
        <Box className="option">
          <InputLabel className="label">Question Level</InputLabel>
          <Select className="select" onChange={handleQuestionDifficulty} value={difficulty}>
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
        </Box>
        <Box className="option">
          <InputLabel className="label">Question Type</InputLabel>
          <Select className="select" onChange={handleQuestionType} value={type}>
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