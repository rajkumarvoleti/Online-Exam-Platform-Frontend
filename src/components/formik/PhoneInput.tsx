import { Box, InputLabel } from "@mui/material";
import { IInputProps } from "@/interfaces/inputInterfaces";
import { MuiTelInput } from 'mui-tel-input';
import { useFormikContext } from "formik";

const styles = {
  mt:"0",
  width:"360px",
  ".error": {
    color: "red",
    ml: "10px"
  },
  ".input":{
    height:"38px",
  },
  ".input > *": {
    borderRadius: "8px",
    width: "100%",
    height:"100%",
  }
}

export default function PhoneInput(props: IInputProps){

  const formikContext = useFormikContext();
  const handleChange = (value:string) => {
    formikContext.setFieldValue("phoneNumber",value);
    formikContext.setFieldTouched("phoneNumber", true);
    formikContext.validateField("phoneNumber");
  }

  return(
    <Box className="customInput" sx={styles}>
      <InputLabel className="label">{props.label}</InputLabel>
      <MuiTelInput
        inputProps={{style:{borderRadius: "8px"}}}
        variant="outlined"
        ref={props.ref}
        disabled={props.disabled}
        name={props.name}
        error={props.error ? true : false}
        value={props.value?.toString()}
        defaultCountry={"IN"}
        onChange={handleChange}
        onBlur={props.onBlur}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        placeholder={props.placeholder}
        autoComplete={props.autoCompleteOff ? "off" : undefined} 
        className="input center"
        size="medium"
      />
      <p className="error">{props.error}</p>
    </Box>
  )
}