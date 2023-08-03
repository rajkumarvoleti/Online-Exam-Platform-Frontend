import { Box } from "@mui/material";
import ExternalLoginButton from "../buttons/ExternalLoginButton";
import FaceBookIcon from '@/assets/formik/facebook-icon.svg';
import TwitterIcon from '@/assets/formik/twitter-icon.svg';
import GoogleLoginButton from "./GoogleLoginButton";
import MicrosoftLoginButton from "./MicrosoftLoginButton";

const styles = {
  ".signin-with":{
    ".line":{
      width: "100px",
      height: "1px",
      background: "#C2E830",
    },
  },
  ".icons":{
    justifyContent: "space-around",
    margin:"10px 0"
  }
}

export default function ExternalSigninDiv(){

  return (
    <Box sx={styles}>
      <Box className="center signin-with">
        <Box className="line"/>
        <p>Or sign in with</p>
        <Box className="line"/>
      </Box>
      <Box className="center icons">
        <GoogleLoginButton />
        <MicrosoftLoginButton />
        {/* <ExternalLoginButton ButtonIcon={TwitterIcon}/> */}
      </Box>
    </Box>
  )
}