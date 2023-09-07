import WordComponent from "@/components/WordComponent";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IAnswer, IOption } from "@/interfaces/examInterfaces";
import { Box, Button, Checkbox, InputLabel, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const styles:SxProps = {
  padding: "20px",
  ".inputBox":{
    alignItems:"center",
    gap: "10px",
    ".label":{
      margin: "20px 0",
      color: "#000",
      fontSize: "18px",
    }
  },
  ".head":{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 10px",
    "> *":{
      gap: "10px",
    }
  },
  ".addButton":{
    mt: "20px",
  }
}

export default function MCQComponent({defaultAnswer}:{defaultAnswer:IAnswer}) {

  const [choices, setChoices] = useState<IOption[]>(defaultAnswer.options);
  const { handleOptions } = useManageQuestion();

  useEffect(() => {
    if(choices.length === 0)
      setChoices([{description:"",isCorrect:false}]);
  }, [choices])
  
  useEffect(() => {
    setChoices(defaultAnswer.options);
  }, [defaultAnswer.options])
  

  const handleAddChoice = () => {
    setChoices(choices => [...choices,{description:"",isCorrect:false}]);
  }
  const handleRemoveChoice = (i:number) => {
    setChoices(choices => [...choices.slice(0,i),...choices.slice(i+1)]);
  }
  const handleChoiceDescription = (i:number) => {
    return (data:string) => {
      setChoices(choices => [...choices.slice(0,i),{...choices[i], description:data},...choices.slice(i+1)]);
    }
  }
  const handleChoiceAnswer = (i:number) => {
    return (e:any) => {
      const data = e.target.checked;
      setChoices(choices => [...choices.slice(0,i),{...choices[i], isCorrect:data},...choices.slice(i+1)]);
    }
  }

  useEffect(() => {
    handleOptions(choices);
  }, [choices])
  

  return (
    <Box sx={styles}>
      {choices.map((val,i) => {
        return (
          <Box className="inputBox" key={i}>
            <Box className="head">
              <Box className="center">
                <InputLabel className="label">Choice {i+1}</InputLabel>
                <Button size="small" variant="outlined" onClick={() => handleRemoveChoice(i)} color="error" disabled={choices.length < 2}>Remove Choice</Button>
              </Box>
              <Box className="center">
                <p>Correct Answer</p>
                <Checkbox checked={val.isCorrect} onChange={handleChoiceAnswer(i)}/>
              </Box>
            </Box>
            <WordComponent value={val.description} handleData={handleChoiceDescription(i)} />
          </Box>
        )
      })}
      <Button className="addButton" size="small" onClick={handleAddChoice} variant="outlined">Add Choice</Button>
    </Box>
  )
}