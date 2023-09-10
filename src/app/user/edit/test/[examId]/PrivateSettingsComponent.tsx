import {Box, SxProps, FormControlLabel, Radio, RadioGroup} from '@mui/material';

const styles:SxProps = {
  ".container":{
    " > *":{
      display: "flex",
      alignItems: "flex-start",
      margin: "20px 0",
      "> *:first-child":{
        width: "200px",
        flexShrink: "0",
      },
    }
  },
  ".radioGroup":{
    display: "flex",
    flexDirection: "column",
    ".MuiRadio-root":{
      padding: "4px"
    }
  }
}

export default function PrivateSettingsComponent() {
  return (
    <Box sx={styles}>
      <h4>Private Settings</h4>
      <Box className="container">
        <Box className="group">
          <p>Result Format</p>
          <Box className="radioGroup">
            <FormControlLabel value="marks" control={<Radio />} label="Marks" />
            <FormControlLabel value="Pass / Fail" control={<Radio />} label="Pass / Fail" />
            <FormControlLabel value="Rank" control={<Radio />} label="Rank" />
            <FormControlLabel value="Percentile" control={<Radio />} label="Percentile" />
            <FormControlLabel value="Percentage" control={<Radio />} label="Percentage" />
          </Box>
        </Box>
        <Box className="group">
          <p>Result Declaration</p>
          <Box className="radioGroup">
            <FormControlLabel value="Show Result After Each Question" control={<Radio />} label="Show Result After Each Question" />
            <FormControlLabel value="Immediately After Exam Completion" control={<Radio />} label="Immediately After Exam Completion" />
            <FormControlLabel value="Send Results via email only" control={<Radio />} label="Send Results via email only" />
            <FormControlLabel value="Don't declare" control={<Radio />} label="Don't declare" />
          </Box>
        </Box>
        <Box className="group">
          <p>Show Correct Answer</p>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  )
}