import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IQuestionAndAnswer, ITopic } from "@/interfaces/examInterfaces";
import { ICreateQuestions } from "@/interfaces/formikInterfaces";
import { IQuestionLevel, IQuestionType } from "@/interfaces/questionInterfaces";
import { Box, Button, Card, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { useFormikContext } from "formik";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const styles:SxProps = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  mb: "10px",
  h4:{
    fontSize: "19px",
    fontWeight: "400",
    color: "#000",
    m: 0,
    pl: "10px",
  },
  ".options":{
    display: "flex",
    gap: "10px",
  },
  ".select":{
    width: "215px",
      height: "34px",
    borderRadius: "5px",
    // border: "1px solid #B9B9B9",
  },
  ".removeButton":{
    height: "31px",
    mt: "22px",
    borderRadius: "5px",
  },
  ".label":{
    color: "#575757",
    fontSize: "14px",
    margin: " 0px"

  }
}

export default function Header({index}:{index:number}) {

  const {values, handleChange, setFieldValue, validateField} = useFormikContext<ICreateQuestions>();
  // values.questions[index].answer.type

  useEffect(() => {
    console.log(values);
  }, [values])

  const handleRemove = (id:number|undefined) => {
    if(!id)
      return;
    return async() => {
      const newQuestions = values.questions.filter(question => question.questionId !== id);
      await setFieldValue("questions",newQuestions);
    }
  }
  

  return (
    <Box sx={styles}>
      <h4>Question No : {index+1} of {values.questions.length}</h4>
      <Box className="options">
        <Button className="removeButton" color="error" onClick={handleRemove(values.questions[index].questionId)} variant="outlined" size="small">Remove Question</Button>
        <Box className="option">
          <InputLabel className="label">Question Level</InputLabel>
          <Select name={`questions[${index}].complexity`} className="select" onChange={handleChange} value={values.questions[index].complexity}>
            <MenuItem value={"easy"}>Easy</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"hard"}>Hard</MenuItem>
          </Select>
        </Box>
        <Box className="option">
          <InputLabel className="label">Question Type</InputLabel>
          <Select className="select" name={`questions[${index}].answer.type`} onChange={handleChange} value={values.questions[index].answer.type}>
            <MenuItem value={"trueOrFalse"}>True Or False</MenuItem>
            <MenuItem value={"fillInTheBlanks"}>Fill in the Blanks</MenuItem>
            <MenuItem value={"multipleChoice"}>Multiple Choice</MenuItem>
            <MenuItem value={"subjective"}>Subjective</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  )
}