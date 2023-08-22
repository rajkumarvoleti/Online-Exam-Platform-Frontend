import { useQuiz } from "@/hooks/useQuiz";
import { FormControlLabel, Radio } from "@mui/material";
import { useState } from "react";

export default function MCQAnswer({options}:{options:string[]}) {

  const {activeQuestion, attemptQuestion} = useQuiz();
  const [selectedOption, setSelectedOption] = useState("");


  const handleClick = (e:any) => {
    const value = e.target.value;
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
    <>
      {options?.map((option,i) =>  (
        <FormControlLabel 
          checked={selectedOption === option && activeQuestion.attempted}
          onClick={handleClick}
          className={selectedOption === option && activeQuestion.attempted ? "label active": "label"}
          key={i}
          value={option}
          control= {<Radio/>}
          label={option} />
        )
      )}
    </>
  )
}