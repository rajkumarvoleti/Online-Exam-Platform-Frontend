import { Box, InputAdornment, InputLabel, OutlinedInput, SxProps } from "@mui/material";
import InputStartAdorment from "./InputStartAdorment";
import { IInputProps } from "@/interfaces/inputInterfaces";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';

const styles: SxProps = {
  mt:"0",
  ".error": {
    color: "red",
    pl: "10px",
    fontSize: "14px",
    padding: "0",
    maxWidth:"200px",
  },
  ".input":{
    height:"38px",
    borderRadius: "8px",
    fontSize: "15px",
  },
  ".desc":{
    color: "#B9B9B9",
    m: 0,
  },
  label: {
    color: "#000",
  }
}

export function SimpleInput({label, disabled, type, value, name}:{label:string, disabled: true, type:string, value:string, name:string}) {
  return (
    <Box className="customInput" sx={styles}>
      <InputLabel className="label">{label}</InputLabel>
      <OutlinedInput
        disabled={disabled}
        name={name}
        type={type ?? "text"}
        value={value}
        className="input center"
      />
    </Box>
  )
}

export default function Input(props: IInputProps){

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const passwordType  = showPassword ? "text" : "password";
  const inputType = props.type === "password" ? passwordType : props.type;

  return(
    <Box className={props.className + " customInput"} sx={styles}>
      <InputLabel className="label">{props.label}</InputLabel>
      <p className="desc">{props.desc}</p>
      <OutlinedInput
        ref={props.ref}
        disabled={props.disabled}
        name={props.name}
        error={props.error ? true : false}
        type={inputType ?? "text"}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        autoComplete={props.autoCompleteOff ? "off" : undefined} 
        className="input center"
        startAdornment={props.InputImage && <InputStartAdorment InputImage={props.InputImage}/>}
        endAdornment={
          props.type === 'password' && (
            <InputAdornment position="end">
              {showPassword ? (
                <VisibilityOffIcon fontSize="small" onClick={togglePasswordVisibility} />
              ) : (
                <VisibilityIcon fontSize="small" onClick={togglePasswordVisibility} />
              )}
            </InputAdornment>
          )
        }
      />
      <p className="error">{props.error}</p>
    </Box>
  )
}