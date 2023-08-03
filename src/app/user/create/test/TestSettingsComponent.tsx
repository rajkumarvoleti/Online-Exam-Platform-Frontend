import DatePickerComponent from '@/components/DatePickerComponent';
import TimePickerComponent from '@/components/TimePickerComponent';
import { Box, SxProps, RadioGroup, FormControlLabel, Radio, OutlinedInput} from '@mui/material';

const styles:SxProps = {
  ".container":{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  ".timePicker":{
    width: "80px",
  },
  ".timeGroup, .dateGroup":{
    display: "flex",
    alignItems: "center",
    gap: "20px",
  }
}

export default function TestSettingsComponent() {
  return (
    <Box sx={styles}>
      <h4 className='heading'>TEST SETTINGS</h4>
      <Box className="container">
        <Box className="group">
          <p>Test Availability: </p>
          <RadioGroup row>
            <FormControlLabel value="specific" control={<Radio />} label="Specific" />
            <FormControlLabel value="always" control={<Radio />} label="Always" />
          </RadioGroup>
        </Box>
        <Box className="group">
          <p>Exam date: </p>
          <Box className="dateGroup">
            <DatePickerComponent />
            <p>to</p>
            <DatePickerComponent />
          </Box>
        </Box>
        <Box className="group">
          <p>Time: </p>
          <RadioGroup row>
            <FormControlLabel value="specific" control={<Radio />} label="Specific" />
            <FormControlLabel value="always" control={<Radio />} label="Always" />
          </RadioGroup>
        </Box>
        <Box className="group">
          <p>Time Set: </p>
          <Box className="timeGroup">
            <TimePickerComponent />
            <p>to</p>
            <TimePickerComponent />
          </Box>
        </Box>
        <Box className="group">
          <p>Test: </p>
          <RadioGroup row>
            <FormControlLabel value="specific" control={<Radio />} label="Specific" />
            <FormControlLabel value="always" control={<Radio />} label="Always" />
          </RadioGroup>
        </Box>
        <Box className="group">
          <p>Time Duration: </p>
          <Box className="durationGroup">
            <span>Hours: </span>
            <OutlinedInput className='muiInput' type="number" />
            <span>mins: </span>
            <OutlinedInput className='muiInput' type="number" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}