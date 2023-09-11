import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { ICreateQuestions } from "@/interfaces/formikInterfaces";
import { Box, InputLabel, OutlinedInput, SxProps } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";

const styles:SxProps = {
  padding: "16px 7px",
  ".inputBox":{
    display: "flex",
    alignItems:"center",
    gap: "10px",
    ".input":{
      maxWidth: "300px",
      height: "43px",
      borderRadius:"5px",
    },
    ".label":{
      color: "#000",
      fontSize: "18px",
    }
  }
}

export default function FillInTheBlanksComponent({index}:{index:number}) {

  const {handleChange, values} = useFormikContext<ICreateQuestions>();

  return (
    <Box sx={styles}>
      <Box className="inputBox">
        <InputLabel className="label">Answer :</InputLabel>
        <OutlinedInput name={`questions[${index}].answer.description`} value={values.questions[index].answer.description} onChange={handleChange} className="input" />
      </Box>
    </Box>
  )
}