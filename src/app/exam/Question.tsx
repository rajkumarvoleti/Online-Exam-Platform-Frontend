import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { IQuestion } from "./page";

export default function Question({questionData}:{questionData:IQuestion}){
  return(
    <>
      <FormLabel>{questionData.text}</FormLabel>
      <RadioGroup>
        {questionData.options.map(option => <FormControlLabel value={option._id} control={<Radio />} key={option._id} label={option.text} />)}
      </RadioGroup>
    </>
  )
}