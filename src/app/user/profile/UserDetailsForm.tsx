import { FormikInput } from "@/components/formik/FormikInput";
import { Box, Button, SxProps } from "@mui/material";
import { Form, Formik } from "formik";
import Image from "next/image";
import UserImage from '@/assets/user/userImage.png';
import EmailIcon from '@/assets/formik/email-icon.svg';
import { getUserDetails } from "@/utils/formik/initialValues";
import { signupValidationSchema } from "@/utils/validationScehma";
import { getCountries, getTimeZones } from "@/utils/helperFunctions";
import useUser from "@/hooks/useUser";
import ActionButtons from "./ActionButtons";
import { IUserDetailsForm } from "@/interfaces/formikInterfaces";
import { useUpdateUser } from "@/hooks/auth/useUpdateUser";

const styles:SxProps = {
  padding: "20px",
  width:"100%",
  ".form":{
    display: "flex",
    flexWrap: "wrap",
    border:"2px solid red",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "0 30px",
    margin: "30px 0",
  },
  ".tagline": {
    gridColumn: "1/4",
  },
  ".bio":{
    gridColumn: "1/4",
    ".input":{
      height: "200px",
      alignItems:"start"
    }
  },
  ".customInput": {
    width: "270px",
    height: "69px",
  },
  ".imageUpload": {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
  ".buttons":{
    gridColumn: "1/4",
  }
}

export default function UserDetailsForm(){

  const user = useUser();
  const {updateUser} = useUpdateUser();
  if(!user)
    return <></>;
  
  const handleSubmit = (values:IUserDetailsForm) => {
    updateUser(values);
  }

  return (
    <Box sx={styles}>
    <Box className="imageUpload">
      <Image src={UserImage.src} alt="user image" width={"100"} height={"100"}/>
      <Box>
        <p className="phead">Upload Image</p>
        <p>Allowed formats: jpeg, png: Size: Up to 50kb</p>
        <Button variant="outlined" size="small">Browse</Button>
      </Box>
    </Box>
    <Formik 
        initialValues={getUserDetails(user)} validationSchema={signupValidationSchema}
        onSubmit={(values) => console.log(values)}
        >
      {({values}) => (
        <Form className="form">
          <FormikInput
            name="firstName"
            label="First Name"
            placeholder=""
            value={values.firstName}
            />
          <FormikInput
            name="lastName"
            label="Last Name"
            placeholder=""
            value={values.lastName}
            />
          <FormikInput
            name="email"
            label="Email"
            placeholder=""
            value={values.email}
            InputImage={EmailIcon}
            />
          <FormikInput
            name="country"
            label="Country"
            placeholder=""
            type="autocomplete"
            options={getCountries()}
            autoCompleteOption={values.country}
            />
          <FormikInput
            name="timezone"
            label="Time Zone"
            placeholder=""
            type="autocomplete"
            options={getTimeZones(values.country.id)}
            autoCompleteOption={values.timezone}
            />
          <FormikInput
            name="phoneNumber"
            label="Phone Number"
            placeholder=""
            value={values.phoneNumber}
            type="phoneNumber"
            />
          <FormikInput
            name="tagline"
            className="tagline"
            label="Tagline"
            placeholder=""
            value={values.tagline}
            />
          <FormikInput
            className="bio"
            name="bio"
            label="Bio"
            placeholder=""
            value={values.bio}
            desc="Write a short introduction about yourself to let potential employers know about you"
            />
          <ActionButtons handleSubmit={() => handleSubmit(values)} />
        </Form>
      )}
    </Formik>
    </Box>
  );
}