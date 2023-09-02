import CustomTimePicker from '@/components/CustomTimePicker';
import DatePickerComponent from '@/components/DatePickerComponent';
import TimePickerComponent from '@/components/TimePickerComponent';
import { ITestSettingsForm } from '@/interfaces/formikInterfaces';
import { generateArray } from '@/utils/helperFunctions';
import { Box, SxProps, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

const styles:SxProps = {
  ".group":{
    display:"flex",
    margin: "20px 0",
    gap:"20px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  ".details":{
    display: "flex",
    ".label":{
      flexShrink: "0",
      fontSize: "16px",
      width: "120px",
    },
    ".select":{
      flexShrink: "0",
      height: "38px",
      width: "187px",
    }
  },
  ".options":{
    display: "flex",
    flexWrap: "wrap",
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
  ".error": {
    color: "red",
    pl: "10px",
    fontSize: "14px",
    padding: "0",
    maxWidth:"200px",
  },
}

export default function TestSettingsComponent() {

  const {values, handleChange, setFieldValue, errors, setFieldTouched, touched} = useFormikContext<ITestSettingsForm>();

  useEffect(() => {
    console.log(values);
  }, [values])

  const handleCustomChange = (name:keyof ITestSettingsForm) => {
    return async (value: string | number) => {
      setFieldTouched(name);
      await setFieldValue(name,value);
    }
  }

  const getError = (name:keyof ITestSettingsForm) => {
    if(touched[name] && errors[name]) return errors[name];
    return undefined;
  }

  return (
    <Box sx={styles}>
      <Box className="groups">
        <Box className="group">
          <Box className="details">
            <p className='label'>Test Availability: </p>
            <Select name='testDateAvailability' value={values.testDateAvailability} onChange={handleChange} className='select'>
              <MenuItem value="specific">Specific</MenuItem>
              <MenuItem value="always">Always</MenuItem>
            </Select>
          </Box>
          {values.testDateAvailability === "specific" && 
          <Box className="options">
            <p className='label'>Exam Date:</p>
            <DatePickerComponent value={values.testStartDate} error={getError("testStartDate")} className={'picker datePicker'} handleChange={handleCustomChange("testStartDate")} />
            <p className='label to'>To</p>
            <DatePickerComponent value={values.testEndDate} error={getError("testEndDate")} className={'picker datePicker'} handleChange={handleCustomChange("testEndDate")} />
          </Box>}
        </Box>
        <Box className="group">
          <Box className="details">
            <p className='label'>Time: </p>
            <Select name='testTimeAvailability' onChange={handleChange} className='select' value={values.testTimeAvailability}>
              <MenuItem value="specific">Specific</MenuItem>
              <MenuItem value="always">Always</MenuItem>
            </Select>
          </Box>
          {values.testTimeAvailability === "specific" && 
          <Box className="options">
            <p className='label'>Time Set:</p>
            <TimePickerComponent value={values.testStartTime} error={getError("testStartTime")} views={["hours","minutes"]} className='picker timePicker' handleChange={handleCustomChange("testStartTime")} />
            <p className='label to'>To</p>
            <TimePickerComponent value={values.testEndTime} error={getError("testEndTime")} views={["hours","minutes"]} className='picker timePicker' handleChange={handleCustomChange("testEndTime")} />
          </Box>}
        </Box>
        <Box className="group">
          <Box className="details">
            <p className='label'>Duration: </p>
            <Select name="testDurationAvailability" onChange={handleChange} className='select' value={values.testDurationAvailability}>
              <MenuItem value="specific">Specific</MenuItem>
              <MenuItem value="always">Always</MenuItem>
            </Select>
          </Box>
          {values.testDurationAvailability === "specific" && 
          <Box className="options">
            <p className='label'>Time Duration:</p>
            <CustomTimePicker value={values.testDuration} type='hours' options={generateArray(0,12,1)} label='Hours' className='picker customPicker' handleChange={handleCustomChange("testDuration")} />
            <p className='label to'></p>
            <CustomTimePicker value={values.testDuration} type='minutes' options={generateArray(0,55,5)} label='Minutes' className='picker customPicker' handleChange={handleCustomChange("testDuration")} />
          </Box>}
        </Box>
      </Box>
    </Box>
  )
}