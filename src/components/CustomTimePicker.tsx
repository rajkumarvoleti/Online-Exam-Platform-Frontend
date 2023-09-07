import { Box, MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const styles:SxProps = {
  display:"flex",
  ".label":{
    pl: "10px",
  }
}

export default function CustomTimePicker({className, label, options, handleChange, type, value}:{className:string, label:string, options:number[], handleChange:(val:number) => void, type: "hours" | "minutes", value: number}) {

  const val = type === "hours" ? Math.ceil(value/60) : value % 60;

  const handleSelect = (e: SelectChangeEvent) => {
    const val = e.target.value;
    const num = parseInt(val,10);
    if(type === "hours")
      handleChange(num*60);
    else
      handleChange(num);
  }
  

  return (
    <Box className={className} sx={styles}>
      <p className="label">{label}</p>
      <Select value={JSON.stringify(val)} onChange={handleSelect}>
        {options.map(opt => (
          <MenuItem value={opt} key={opt} >{opt}</MenuItem>
        ))}
      </Select>
    </Box>
  )
}