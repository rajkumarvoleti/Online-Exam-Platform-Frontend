import { FormikInput } from "@/components/formik/FormikInput";
import { updatePasswordInitialValues } from "@/utils/formik/initialValues";
import { updatePasswordValidationSchema } from "@/utils/validationScehma";
import { Box, SxProps } from "@mui/material";
import { Form, Formik } from "formik";
import PasswordIcon from "@/assets/formik/password-icon.svg";
import ActionButtons from "./ActionButtons";
import { IUpdatePasswordForm } from "@/interfaces/formikInterfaces";
import { useUpdateUser } from "@/hooks/auth/useUpdateUser";

const styles:SxProps = {
  margin: "20px",
  width: "66vw",

  // width:"100%",
  ".customInput":{
    width: "270px",
    ".input":{
      borderRadius:"5px"
    }
  }
}

export default function UpdatePasswordForm() {

  const {updatePassword} = useUpdateUser();

  const handleSubmit = (values:IUpdatePasswordForm) => {
    updatePassword(values);
  }

  return (
    <Box sx={styles}>
      <Formik 
        initialValues={updatePasswordInitialValues}
        validationSchema={updatePasswordValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({values}) => (
          <Form>
            <FormikInput
            name="currentPassword"
            label="Current Password"
            placeholder="***************"
            value={values.currentPassword}
            InputImage={PasswordIcon}
            type="password"
          />
            <FormikInput
            name="newPassword"
            label="New Password"
            placeholder="***************"
            value={values.newPassword}
            InputImage={PasswordIcon}
            type="password"
          />
            <FormikInput
            name="confirmNewPassword"
            label="Confirm New Password"
            placeholder="***************"
            value={values.confirmNewPassword}
            InputImage={PasswordIcon}
            type="password"
          />
          <ActionButtons handleSubmit={() => handleSubmit(values)}/>
          </Form>
        )}
      </Formik>
    </Box>
  )
}