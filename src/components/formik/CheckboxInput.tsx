import { Box, Checkbox } from "@mui/material";
import { IInputProps } from "@/interfaces/inputInterfaces";
import Link from "next/link";

const styles = {
  margin: "30px 0",
  mt:"0",
  width:"360px",
  ".checkbox":{
    display:"flex",
    gap:"10px",
  },
  ".error": {
    color: "red",
    ml: "10px"
  },
}

export default function CheckboxInput(props: IInputProps){

  return(
    <Box sx={styles}>
      <Box className="checkbox">
        <Checkbox 
          disabled={props.disabled}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          />
          <p>I agree to the <Link href={"/"}>terms of use</Link>, <Link href={"/"}>general Escrow instruction</Link> and <Link href={"/"}>privacy policy</Link>.</p>
        </Box>
      <p className="error">{props.error}</p>
    </Box>
  )
}