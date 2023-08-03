import {Box, SxProps, RadioGroup, Radio, FormControlLabel, OutlinedInput} from '@mui/material';

const styles:SxProps = {

  ".group.large":{
    "> *:first-child":{
      alignSelf: "flex-start",
    },
  }
}

export default function TestEvaluationComponent() {
  return (
    <Box sx={styles}>
      <h4>Test Evaluation</h4>
      <Box className="container">
      <Box className="group large">
        <p>Allow Reattempts: </p>
        <Box>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          <p className='helperText'>User can restart Test from the same point where they stopped the test In Case of Power Cut-Off , System Crash etc due to unexpected Circumstances</p>
        </Box>
      </Box>
      <Box className="group durationGroup">
        <p>How Many: </p>
        <Box>
          <FormControlLabel value="unlimited" control={<Radio />} label="Unlimited" />
          <OutlinedInput className='muiInput' type="number" />
        </Box>
      </Box>
      <Box className="group">
        <p>Gap Between Reattempts</p>
        <Box>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
        <Box className="durationGroup">
          <span>Hours: </span>
          <OutlinedInput className='muiInput' type="number" />
          <span>mins: </span>
          <OutlinedInput className='muiInput' type="number" />
        </Box>
      </Box>
      <Box className="group large">
        <p>Back Button / Previous Questions: </p>
        <Box>
          <RadioGroup row>
            <FormControlLabel value="allowed" control={<Radio />} label="Allowed" />
            <FormControlLabel value="notAllowed" control={<Radio />} label="Not Allowed" />
          </RadioGroup>
          <p className='helperText'>User can go to previous Question and Can change the answers</p>
        </Box>
      </Box>
      </Box>
    </Box>
  )
}