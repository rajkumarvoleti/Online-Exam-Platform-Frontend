"use client"

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Form, Formik } from 'formik';
import PasswordIcon from "@/assets/formik/password-icon.svg";
import { FormikInput } from "@/components/formik/FormikInput";

const styles = {
  flexDirection:"column",
  ".loginFormik":{
    width: "360px",
  },
  h4:{
    textAlign:"center",
  },
  ".signin-with":{
    justifyContent: "space-around",
    m:"30px",
    width:"100%",
    ".line":{
      width: "100px",
      height: "1px",
      background: "#C2E830",
    },
  },
}

export default function Page(){

  return (
    <Box sx={styles} className="center">
      {/* <Image src={ForgotPasswordIcon.src} alt="header-logo" height={ForgotPasswordIcon.height} width={ForgotPasswordIcon.width}/> */}
      <h4>Forgot Password !</h4>
      <Formik 
        initialValues={{otp:"",password:"",confirmPassword:""}} 
        onSubmit={(values) => console.log(values)}>
      {({values}) => (
        <Form className="loginFormik">
          <FormikInput
            name="otp"
            label="OTP"
            placeholder=""
            value={values.otp}
          />
          <FormikInput
            name="password"
            label="Password"
            placeholder="***************"
            value={values.password}
            InputImage={PasswordIcon}
            type="password"
          />
          <FormikInput
            name="confirmPassword"
            label="Confirm Password"
            placeholder="***************"
            value={values.confirmPassword}
            InputImage={PasswordIcon}
            type="password"
          />
          <Button type="submit" fullWidth variant="contained">Save</Button>
        </Form>
      )}
      </Formik>
    </Box>
  )
}