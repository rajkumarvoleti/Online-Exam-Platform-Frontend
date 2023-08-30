import { useQuiz } from "@/hooks/useQuiz";
import { Box, Input, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  gap:'20px',
  h4:{
    color: "#000",
    fontWeight: 'normal',
    fontSize: "16px",
  }
}

export default function SubjectiveAnswer() {

  const {attemptQuestion, activeQuestion} = useQuiz();
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const response = activeQuestion.response;
    if(response)
      setSelectedOption(response);
  }, [activeQuestion])


  const handleChange = (e:any) => {
    const value = e.target.value;
    console.log(value);
    if(!value)
    return;
    if(value === selectedOption){
      attemptQuestion(null);
      setSelectedOption("");
    }
    else{
      attemptQuestion(value);
      setSelectedOption(value);
    }
  }

  return (
    <Box sx={styles}>
      <h4>Ans{") "}</h4>
      <Input value={selectedOption} onChange={handleChange} />
    </Box>
  )
}