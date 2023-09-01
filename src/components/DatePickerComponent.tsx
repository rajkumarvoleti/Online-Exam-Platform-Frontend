// /* eslint-disable react/display-name */
// import { forwardRef, useState } from "react";
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";


// export default function DatePickerComponent() {
//   const [startDate, setStartDate] = useState(new Date());
//   const ExampleCustomInput = forwardRef(({ value, onClick }:{value?:any, onClick?:any}, ref:any) => (
//     <button className="example-custom-input" onClick={onClick} ref={ref}>
//       {value}
//     </button>
//   ));
//   return (
//     <DatePicker
//       className="datePicker"
//       selected={startDate}
//       onChange={(date:any) => setStartDate(date)}
//       customInput={<ExampleCustomInput />}
//     />
//   );
// }

import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({handleChange, className}:{handleChange:() => void, className?:string}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className={className} />
    </LocalizationProvider>
  );
}
