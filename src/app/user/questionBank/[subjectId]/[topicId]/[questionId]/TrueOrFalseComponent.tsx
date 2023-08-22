import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { IAnswer } from "@/interfaces/examInterfaces";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useState } from "react";

const styles = {
  padding: "20px",
  "> *":{
    padding: "20px",
  },
  ".radio":{
    '&.Mui-checked': {
      fill: "#C783FF",
    },
  },
}

export default function TrueOrFalseComponent({defaultAnswer}:{defaultAnswer:IAnswer}) {
  const [value, setValue] = useState<string>(defaultAnswer.description);
  const { handleAnswer } = useManageQuestion();

  useEffect(() => {
    handleAnswer(value);
  },[value])

  useEffect(() => {
    setValue(defaultAnswer.description);
  }, [defaultAnswer.description])
  

  const handleChange = (e:any) => {
    setValue(e.target.value);
  }

  return (
    <RadioGroup onChange={handleChange} sx={styles} row className="radioGroup" value={value}>
      <FormControlLabel value={"true"} control={<Radio color="secondary" />} label="True" />
      <FormControlLabel value={"false"} control={<Radio color="secondary" />} label="False" />
    </RadioGroup>
  )
}