"use client"

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Formik, Form } from 'formik';
import { loginInitialValues } from "@/utils/formik/initialValues";
import { loginValidatonSchema } from "@/utils/validationScehma";
import { FormikInput } from "@/components/formik/FormikInput";
import PasswordIcon from "@/assets/formik/password-icon.svg";
import EmailIcon from "@/assets/formik/email-icon.svg";
import { ILoginForm } from "@/interfaces/formikInterfaces";
import { useLogin } from "@/hooks/auth/useLogin";
import ExternalSigninDiv from '@/components/auth/ExternalSigninDiv';
import Link from "next/link";
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect } from "react";
import { boolean } from "yup";
import { atom } from "recoil";

const styles = {
  flexDirection: "column",
  ".loginFormik": {
    width: "360px",
  },
  h4: {
    textAlign: "center",
  },
  ".external-links": {
    width: "100%",
    justifyContent: "space-around",
    margin: "30px"
  },
}

export default function Page() {

  const { internalLogin, loading } = useLogin();

  const handleSubmit = async (values: ILoginForm) => {
    console.log(values);
    internalLogin({ email: values.email, password: values.password });
  }

  useEffect(() => {
    console.log({loading})
  }, [loading])
  

  return (
    <Box sx={styles} className="center">
      <h4>Welcome Back !</h4>
      <Formik
        initialValues={loginInitialValues} validationSchema={loginValidatonSchema}
        onSubmit={(values) => handleSubmit(values)}>
        {({ values }) => (
          <Form className="loginFormik">
            <FormikInput
              name="email"
              label="Email"
              placeholder="Pallanarendra1997@gmail.com"
              value={values.email}
              InputImage={EmailIcon}
            />
            <FormikInput
              name="password"
              label="Password"
              placeholder="***************"
              value={values.password}
              InputImage={PasswordIcon}
              type="password"
            />
            <LoadingButton loading={loading} type="submit" fullWidth variant="contained">Log In</LoadingButton>
          </Form>
        )}
      </Formik>
      <Box className="center external-links">
        <Link href={"/auth/signup"}>Create an account</Link>
        <Link href={"/auth/forgotPassword"}>Forgot Password</Link>
      </Box>
      <ExternalSigninDiv />
    </Box>
  )
}