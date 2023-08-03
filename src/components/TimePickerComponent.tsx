/* eslint-disable react/display-name */
import { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="timePicker"
      selected={startDate}
      onChange={(date:any) => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
}