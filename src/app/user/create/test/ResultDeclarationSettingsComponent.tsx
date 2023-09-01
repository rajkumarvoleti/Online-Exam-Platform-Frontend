import {Box, FormControlLabel, Radio, RadioGroup, SxProps} from '@mui/material';

const styles:SxProps = {
  h4:{
    color: "#000",
    fontSize: "20px",
    fontWeight: "600",
    mt: "40px",
  },
  ".radioGroups":{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "900px",
  },
  ".radioGroup":{
    display: "flex",
    alignItems: "flex-start",
  },
  ".radioHead":{
    width: "180px",
    m: "10px 0"
  }
}

const resultFormatOptions = [
  {
    id: "marks",
    label: "Marks",
  },
  {
    id: "passFail",
    label: "Pass / Fail",
  },
  {
    id: "rank",
    label: "Rank",
  },
  {
    id: "percentage",
    label: "Percentage",
  },
]

const timeDeclarationOptions = [
  {
    id: "showResultAfterEachQuestion",
    label: "Show Result After Each Question",
  },
  {
    id: "immediatelyAfterExamCompletion",
    label: "Immediately After Exam Completion",
  },
  {
    id: "sendResultsViaEmailOnly",
    label: "Send Results Via Email Only",
  },
  {
    id: "dontDeclare",
    label: "Don't Declare",
  },
]

export default function ResultDeclarationSettingsComponent() {
  return (
    <Box sx={styles}>
      <h4>Result Declaration Settings</h4>
      <Box className="radioGroups">
        <Box className="radioGroup">
          <p className='radioHead'>Result Format: </p>
          <RadioGroup defaultValue="female">
            {resultFormatOptions.map(opt => (
              <FormControlLabel key={opt.id} value={opt.id} control={<Radio color='default' size='small' />} label={opt.label} />
            ))}
          </RadioGroup>
        </Box>
        <Box className="radioGroup">
          <p className='radioHead'>Time Declaration: </p>
          <RadioGroup defaultValue="female">
            {timeDeclarationOptions.map(opt => (
              <FormControlLabel key={opt.id} value={opt.id} control={<Radio color='default' size='small' />} label={opt.label} />
            ))}
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  )
}