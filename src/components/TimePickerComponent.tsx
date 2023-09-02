import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {  TimePicker, TimeView, renderTimeViewClock } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Box } from '@mui/material';

export default function BasicTimePicker({handleChange, className, views, error, value}:{handleChange?:(val:string) => void, className?:string, views?: TimeView[], error?:string, value: string}) {

  const time = value !== "" ? dayjs(value) : null;

  const onChange = (e:Dayjs|null) => {
    if(!e)
      return;
    if(handleChange)
      handleChange(e.toDate().toUTCString());
  }

  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={time}
          onChange={onChange}
          className={className}
          views={views}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          />
      </LocalizationProvider>
      <p className='error'>{error}</p>
    </Box>
  );
}