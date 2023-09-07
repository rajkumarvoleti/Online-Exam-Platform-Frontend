import { SimpleInput } from "@/components/formik/Input";
import useUser from "@/hooks/useUser";
import { Box, SxProps } from "@mui/material";

const styles:SxProps = {
  
  display: "flex",
  gap:"20px",
  margin:"20px",

  ".customInput":{
    width:"220px",
    label:{
      margin:"0",
      color:"#272727",
      fontSize:"14px"
    },
    ".input":{
      margin:"0",
      borderRadius:"5px"
    }
  }
}

export default function BasicForm() {

  const user = useUser();

  return (
    <Box sx={styles}> 
      <SimpleInput
        name="name"
        label="User Name"
        value={user?.firstName || ""}
        disabled={true}
        type="text"

      />
      <SimpleInput
        name="phoneNumber"
        label="Phone Number"
        value={user?.phoneNumber || ""}
        disabled={true}
        type="phone number"
      />
      <SimpleInput
        name="email"
        label="Email"
        value={user?.email || ""}
        disabled={true}
        type="email"
      />
    </Box>
  )
}