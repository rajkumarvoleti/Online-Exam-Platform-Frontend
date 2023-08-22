"use client"

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from 'formik';
import { signupInitialValues } from "@/utils/formik/initialValues";
import { signupValidationSchema } from "@/utils/validationScehma";
import { FormikInput } from "@/components/formik/FormikInput";
import EmailIcon from "@/assets/formik/email-icon.svg";
import PasswordIcon from "@/assets/formik/password-icon.svg";
import ExternalSigninDiv from "@/components/auth/ExternalSigninDiv";
import { useSignup } from "@/hooks/auth/useSignup";
import Link from "next/link";

const styles = {
  flexDirection:"column",
  ".loginFormik":{
    width: "360px",
  },
  h4:{
    textAlign:"center",
  },
  ".signin":{
    gap: "30px"

  }
}

export default function Page(){

  const { signup } = useSignup();

  return (
    <Box sx={styles} className="center">
      <h4>Create Your Account</h4>
      <p>Please fill out the form below to create your acccount</p>
      <Formik 
        initialValues={signupInitialValues} validationSchema={signupValidationSchema}
        onSubmit={(values) => signup({signupOptions:values})}>
      {({values}) => (
        <Form className="loginFormik">
          <FormikInput
            name="firstName"
            label="First Name"
            placeholder="Kumar"
            value={values.firstName}
          />
          <FormikInput
            name="lastName"
            label="Last Name"
            placeholder="Yajhna"
            value={values.lastName}
          />
          <FormikInput
            name="email"
            label="Email"
            placeholder="Pallanarendra1997@gmail.com"
            value={values.email}
            InputImage={EmailIcon}
          />
          <FormikInput
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            value={values.phoneNumber}
            type="phoneNumber"
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
          <FormikInput
            name="voucherCode"
            label="Voucher Code"
            placeholder="Enter Your Voucher Code"
            value={values.voucherCode}
          />
          <FormikInput
            name="checkbox"
            type="checkbox"
            label=""
            placeholder=""
            value={false}
          />
          <Button type="submit" fullWidth variant="contained">Sign Up</Button>
        </Form>
      )}
      </Formik>
      <Box className="center signin">
        <p>Already have an account?</p>
        <Link href={"/auth/signin"}>Sign in</Link>
      </Box>
      <ExternalSigninDiv />
    </Box>
  )
}