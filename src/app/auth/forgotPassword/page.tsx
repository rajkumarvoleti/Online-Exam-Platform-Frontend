"use client"

import { Box, Button } from "@mui/material";
import { Form, Formik } from 'formik';
import EmailIcon from "@/assets/formik/email-icon.svg";
import ForgotPasswordIcon from "@/assets/user/forgotPassword.png";
import Image from "next/image";
import { FormikInput } from "@/components/formik/FormikInput";
import Link from "next/link";

const styles = {
  flexDirection:"column",
  ".loginFormik":{
    width: "360px",
  },
  ".details":{
    textAlign: "center",
    width:"360px",
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
      <Image src={ForgotPasswordIcon.src} alt="header-logo" height={ForgotPasswordIcon.height} width={ForgotPasswordIcon.width}/>
      <h4>Forgot Password !</h4>
      <p className="details">Enter your email/phone and we&apos;ll send you a OTP to get back into your account.</p>
      <Formik 
        initialValues={{email:""}} 
        onSubmit={(values) => console.log(values)}>
      {({values}) => (
        <Form className="loginFormik">
          <FormikInput
            name="email"
            label="Email"
            placeholder="Pallanarendra1997@gmail.com"
            value={values.email}
            InputImage={EmailIcon}
          />
          <Button type="submit" fullWidth variant="contained">Send Recovery Email</Button>
        </Form>
      )}
      </Formik>
      <Box className="center signin-with">
        <Box className="line"/>
        <p>Or</p>
        <Box className="line"/>
      </Box>
      <Box className="center external-links">
        <Link href={"/auth/signup"}>Create an account</Link>
      </Box>
    </Box>
  )
}