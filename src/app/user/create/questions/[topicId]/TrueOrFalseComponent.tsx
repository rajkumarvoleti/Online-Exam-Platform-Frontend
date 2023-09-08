import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { ICreateQuestions } from "@/interfaces/formikInterfaces";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FormikErrors, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const styles = {
  "> *":{
    padding: "20px",
  },
  ".radio":{
    '&.Mui-checked': {
      fill: "#C783FF",
    },
  },
}

export default function TrueOrFalseComponent({index}:{index:number}) {

  const {handleChange, values, errors} = useFormikContext<ICreateQuestions>()

  return (
    <RadioGroup name={`questions[${index}].answer.description`} onChange={handleChange} sx={styles} row className="radioGroup" value={values.questions[index].answer.description}>
      <FormControlLabel value={"true"} control={<Radio color="secondary" />} label="True" />
      <FormControlLabel value={"false"} control={<Radio color="secondary" />} label="False" />
    </RadioGroup>
  )
}