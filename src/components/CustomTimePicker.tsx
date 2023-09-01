import { Box, MenuItem, Select, SelectChangeEvent, SxProps } from "@mui/material";
import { useState } from "react";

const styles:SxProps = {
  display:"flex"
}

export default function CustomTimePicker({className, label, options, handleChange}:{className:string, label:string, options:number[], handleChange:() => void}) {

  const [value, setValue] = useState("0");

  const handleSelect = (e: SelectChangeEvent) => {
    const val = e.target.value;
    setValue(val);
  }

  return (
    <Box className={className} sx={styles}>
      <p className="label">{label}</p>
      <Select value={JSON.stringify(value)} onChange={handleSelect}>
        {options.map(opt => (
          <MenuItem value={opt} key={opt} >{opt}</MenuItem>
        ))}
      </Select>
    </Box>
  )
}