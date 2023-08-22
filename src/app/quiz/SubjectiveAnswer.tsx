import { useQuiz } from "@/hooks/useQuiz";
import { Box, Input, SxProps } from "@mui/material";
import { useState } from "react";

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

  const {attemptQuestion} = useQuiz();
  const [selectedOption, setSelectedOption] = useState("");


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
      <Input onChange={handleChange} />
    </Box>
  )
}