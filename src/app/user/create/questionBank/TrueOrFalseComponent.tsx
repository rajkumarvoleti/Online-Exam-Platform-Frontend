import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

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

export default function TrueOrFalseComponent() {
  return (
    <RadioGroup sx={styles} row className="radioGroup" defaultValue={true}>
      <FormControlLabel value={true} control={<Radio color="secondary" />} label="True" />
      <FormControlLabel value={false} control={<Radio color="secondary" />} label="False" />
    </RadioGroup>
  )
}