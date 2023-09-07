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
import { SxProps } from "@mui/material";
import DotIcon from '@/assets/icons/DotIcon.png';
import Image from "next/image";

const styles:SxProps = {
  mt:"20px",
  flexDirection: "column",
  ".loginFormik": {
    width: "360px",
  },
  h4: {
    textAlign: "center",
    fontSize: "24px",
  },
  ".external-links": {
    width: "100%",
    justifyContent: "space-around",
    margin: "30px"
  },
  ".submitButton":{
    mt: "25px",
    mb: "15px",
    fontWeight: "600",
    border: "0.5px solid #C2E830",
    boxShadow: "none",
  }
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
            <LoadingButton className="submitButton" loading={loading} type="submit" fullWidth variant="contained">Log In</LoadingButton>
          </Form>
        )}
      </Formik>
      <Box className="center external-links">
        <Link href={"/auth/signup"}>Create an account</Link>
        <Image src={DotIcon.src} width="5" height="4" alt="icon" />
        <Link href={"/auth/forgotPassword"}>Forgot Password</Link>
      </Box>
      <ExternalSigninDiv />
    </Box>
  )
}