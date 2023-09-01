import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker, TimePicker, TimeView, renderTimeViewClock } from '@mui/x-date-pickers';

export default function BasicTimePicker({handleChange, className, views}:{handleChange:() => void, className?:string, views?: TimeView[]}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
          className={className}
          views={views}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
    </LocalizationProvider>
  );
}