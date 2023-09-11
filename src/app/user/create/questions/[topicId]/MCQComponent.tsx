import WordComponent from "@/components/WordComponent";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IOption } from "@/interfaces/examInterfaces";
import { ICreateQuestions } from "@/interfaces/formikInterfaces";
import { Box, Button, Checkbox, InputLabel, SxProps } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";

const styles:SxProps = {
  padding: "6px 7px",
  ".inputBox":{
    alignItems:"center",
    gap: "10px",
    ".label":{
      margin: "20px 0px 15px 0px",
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

export default function MCQComponent({index}:{index:number}) {

  const {values, setFieldValue, handleChange} = useFormikContext<ICreateQuestions>();

  const choices = values.questions[index].answer.options;
  
  const handleRemoveChoice = async (i:number) => {
    const newChoices = choices.filter((choice,choiceIndex) => choiceIndex !== i);
    await setFieldValue(`questions[${index}].answer.options`, newChoices);
  }

  const handleData = (i:number) => {
    return async(data:string) => {
      await setFieldValue(`questions[${index}].answer.options[${i}].description`,data);
    }
  }

  const addChoice = async() => {
    const newChoices:IOption[] = [...choices,{description: "", isCorrect: false}];
    await setFieldValue(`questions[${index}].answer.options`, newChoices);
  }

  // useEffect(() => {
  //   console.log(values.questions)
  // }, [values])
  

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
                <Checkbox name={`questions[${index}].answer.options[${i}].isCorrect`} onChange={handleChange} checked={choices[i].isCorrect}/>
              </Box>
            </Box>
            <WordComponent value={choices[i].description} handleData={handleData(i)} />
          </Box>
        )
      })}
      <Button className="addButton" size="small" onClick={addChoice} variant="outlined">Add Choice</Button>
    </Box>
  )
}