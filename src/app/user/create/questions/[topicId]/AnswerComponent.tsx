import { Box, InputLabel, OutlinedInput, Radio, RadioGroup, SxProps, TextField } from "@mui/material";
import TrueOrFalseComponent from "./TrueOrFalseComponent";
import FillInTheBlanksComponent from "./FillInTheBlanksComponent";
import MCQComponent from "./MCQComponent";
import { IQuestionType } from "@/interfaces/questionInterfaces";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { useEffect, useState } from "react";
import { FormikErrors, useFormikContext } from "formik";
import { ICreateQuestions } from "@/interfaces/formikInterfaces";
import { IOption, IQuestionAndAnswer } from "@/interfaces/examInterfaces";

const styles: SxProps = {
  ".heading": {
    background: "#F4F5F9",
    display: "flex",
    alignItems: "center",
    pl: "20px",
    mt: "20px"
  },
  ".explanation": {
    margin: "20px",
    ".label": {
      margin: "10px 0",
      color: "#000",
      fontSize: "20px",
      lineHeight: "24.542px", /* 122.711% */
    },
    ".input": {
      display: "flex",
      alignItems: "start",
      width: "100%",
      height: "200px",
    },
    ".input input": {
      width: "100%",
      margin: "10px 0"
    },
  },
}

export default function AnswerComponent({ index }: { index:number }) {
  
  const {handleChange, values, errors, touched} = useFormikContext<ICreateQuestions>();

  const type = values.questions[index].answer.type;

  const questionError = touched.questions && touched.questions[index].answer?.description &&  errors.questions && (errors.questions[index] as FormikErrors<IQuestionAndAnswer>);
  const optionsError = touched.questions && touched.questions[index].answer?.options &&  questionError && questionError.answer?.options;
  const optionError = optionsError && (optionsError[index] as FormikErrors<IOption>);

  useEffect(() => {
    console.log(errors);
  }, [errors])
  

  return (
    <Box sx={styles}>
      <Box className="heading">
        <h4>Correct Answer</h4>
      </Box>
      {type === "trueOrFalse" && <TrueOrFalseComponent index={index} />}
      {type === "fillInTheBlanks" && <FillInTheBlanksComponent index={index} />}
      {type === "subjective" && <FillInTheBlanksComponent index={index} />}
      {type === "multipleChoice" && <MCQComponent index={index} />}
      <p className="error">{questionError && questionError.answer?.description}</p>
      <p className="error">{typeof optionsError === "string" && optionsError}</p>
      <p className="error">{optionError && optionError?.description}</p>
      <Box className="explanation">
        <InputLabel className="label">Explanation</InputLabel>
        <OutlinedInput name={`questions[${index}].answer.explanation`} value={values.questions[index].answer.explanation} onChange={handleChange} className="input" />
      </Box>
    </Box>
  )
}