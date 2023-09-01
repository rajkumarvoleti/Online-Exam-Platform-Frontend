import CustomTimePicker from '@/components/CustomTimePicker';
import DatePickerComponent from '@/components/DatePickerComponent';
import TimePickerComponent from '@/components/TimePickerComponent';
import { generateArray } from '@/utils/helperFunctions';
import { Box, SxProps, RadioGroup, FormControlLabel, Radio, OutlinedInput, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { useState } from 'react';

const styles:SxProps = {
  ".group":{
    display:"flex",
    margin: "20px 0",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  ".details":{
    display: "flex",
    ".label":{
      flexShrink: "0",
      fontSize: "16px",
      width: "180px",
    },
    ".select":{
      flexShrink: "0",
      height: "38px",
      width: "187px",
    }
  },
  ".options":{
    display: "flex",
    ".label":{
      width: "120px",
    },
    ".to":{
      color: "#000",
      width: "50px",
      textAlign: "center",
    },
    ".picker": {
      height: "38px",
      width: "187px",
    },
    ".customPicker":{
      border: "1px solid #B9B9B9",
      borderRadius: "5px",
      alignItems:"center",
      '& fieldset': { border: 'none' } ,
    }
  },
}

type SelectOptions = "specific" | "always";

export default function TestSettingsComponent() {

  const [testAvailability, setTestAvailability] = useState<SelectOptions>("specific");
  const [timeOption, setTimeOption] = useState<SelectOptions>("specific");
  const [durationOption, setDurationOption] = useState<SelectOptions>("specific");

  const handleTestAvailabilityChange = (e:SelectChangeEvent<SelectOptions>) => {
    const value = e.target.value as SelectOptions;
    setTestAvailability(value);
  }
  const handleTimeOptionChange = (e:SelectChangeEvent<SelectOptions>) => {
    const value = e.target.value as SelectOptions;
    setTimeOption(value);
  }
  const handleDurationOptionChange = (e:SelectChangeEvent<SelectOptions>) => {
    const value = e.target.value as SelectOptions;
    setDurationOption(value);
  }

  return (
    <Box sx={styles}>
      <Box className="groups">
        <Box className="group">
          <Box className="details">
            <p className='label'>Test Availability: </p>
            <Select onChange={handleTestAvailabilityChange} className='select' defaultValue={"specific"}>
              <MenuItem value="specific">Specific</MenuItem>
              <MenuItem value="always">Always</MenuItem>
            </Select>
          </Box>
          {testAvailability === "specific" && 
          <Box className="options">
            <p className='label'>Exam Date:</p>
            <DatePickerComponent className='picker datePicker' handleChange={() => {}} />
            <p className='label to'>To</p>
            <DatePickerComponent className='picker datePicker' handleChange={() => {}} />
          </Box>}
        </Box>
        <Box className="group">
          <Box className="details">
            <p className='label'>Duration: </p>
            <Select onChange={handleDurationOptionChange} className='select' defaultValue={"specific"}>
              <MenuItem value="specific">Specific</MenuItem>
              <MenuItem value="always">Always</MenuItem>
            </Select>
          </Box>
          {durationOption === "specific" && 
          <Box className="options">
            <p className='label'>Time Set:</p>
            <TimePickerComponent views={["hours","minutes"]} className='picker timePicker' handleChange={() => {}} />
            <p className='label to'>To</p>
            <TimePickerComponent views={["hours","minutes"]} className='picker timePicker' handleChange={() => {}} />
          </Box>}
        </Box>
        <Box className="group">
          <Box className="details">
            <p className='label'>Time: </p>
            <Select onChange={handleTimeOptionChange} className='select' defaultValue={"specific"}>
              <MenuItem value="specific">Specific</MenuItem>
              <MenuItem value="always">Always</MenuItem>
            </Select>
          </Box>
          {timeOption === "specific" && 
          <Box className="options">
            <p className='label'>Time Duration:</p>
            <CustomTimePicker options={generateArray(0,12,1)} label='Hours' className='picker customPicker' handleChange={() => {}} />
            <p className='label to'></p>
            <CustomTimePicker options={generateArray(0,55,5)} label='Minutes' className='picker customPicker' handleChange={() => {}} />
          </Box>}
        </Box>
      </Box>
    </Box>
  )
}