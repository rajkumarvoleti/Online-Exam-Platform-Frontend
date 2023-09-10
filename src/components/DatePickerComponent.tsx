import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Box } from '@mui/material';

export default function BasicDatePicker({error,handleChange, className, value}:{error?:string, handleChange?:(val:string) => void, className?:string, value:string}) {

  const date = value !== "" ? dayjs(value): null;

  const onChange = (e:Dayjs|null) => {
    if(!e)
      return;
    if(handleChange)
      handleChange(e.toDate().toUTCString());
  }

  return (
    <Box className={className + " center"}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker format='DD-MM-YYYY' value={date} onChange={onChange} />
      </LocalizationProvider>
      <p className='error'>{error}</p>
    </Box>
  );
}
