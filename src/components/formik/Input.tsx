import { Box, InputLabel, OutlinedInput, SxProps } from "@mui/material";
import InputStartAdorment from "./InputStartAdorment";
import { IInputProps } from "@/interfaces/inputInterfaces";

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
    height:"38px"
  },
  ".desc":{
    color: "#B9B9B9",
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
  return(
    <Box className={props.className + " customInput"} sx={styles}>
      <InputLabel className="label">{props.label}</InputLabel>
      <p className="desc">{props.desc}</p>
      <OutlinedInput
        ref={props.ref}
        disabled={props.disabled}
        name={props.name}
        error={props.error ? true : false}
        type={props.type ?? "text"}
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
      />
      <p className="error">{props.error}</p>
    </Box>
  )
}