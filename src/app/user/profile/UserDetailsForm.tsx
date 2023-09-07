import { FormikInput } from "@/components/formik/FormikInput";
import { Box, Button, SxProps, capitalize } from "@mui/material";
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
import { Transform } from "stream";

const styles:SxProps = {
  p: "16px",
  // mr:"10px",
  width:"100%",
  ".form":{
    display: "flex",
    flexDirection:"column",
    gap:"5px",
// border:"2px solid red",
    margin: "15px 0",
    ".input":{
      borderRadius:"5px"
    }
  },
  ".label":{
    margin:"0",
    color:"#5b5b5b"
  },
  ".rowForm":{
    display:"flex",
    flexDirection:"row",
    gap:"15px",
    // alignItems:"center",


  },
  ".tagline": {
    width:"300px",
    ".input":{
      width:"830px",

    }
  },

  ".bio":{
    ".desc":{
width:"650px",
fontSize:"15px",
mb:"5px",
    },
    // gridColumn: "1/4",
    ".input":{
      height: "100px",
      alignItems:"start",
      width:"830px"
      
    }
  },
  ".customInput": {
    width: "270px",
    height: "69px",
  },
  ".imageUpload": {
    display: "flex",
    gap: "16px",
    alignItems: "center",
  },
  ".buttons":{
    // gridColumn: "1/4",
  },
  ".circle":{
    height: "84px",
    width: "84px",
    backgroundColor: "#C783FF",
    borderRadius: "50px",
    // display: "inline-block",
  

  },
  ".letter":{
    fontSize: "50px",
    color:"white",
    margin:" 15px 24px ",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // display: flex;
    

  },
  ".phead":{
    margin:"0",
    fontWeight:"550",
    fontSize:"15px"
  },
  ".formats":{
    margin:"6px 0px",
    fontSize:"15px"
  },
  ".browseBtn":{
    color:"#2200A5",
    textTransform:"capitalize",
    p:"0px"
  },


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
      {/* <Image src={UserImage.src} alt="user image" width={"100"} height={"100"}/> */}
      <div className="circle center">
        <span className="letter">K</span>
      </div>
      <Box>
        <p className="phead">Upload Image</p>
        <p className="formats">Allowed formats: jpeg, png: Size: Up to 50kb</p>
        <Button variant="outlined" color="success" className="browseBtn"  size="small">Browse</Button>
      </Box>
    </Box>
    <Formik 
        initialValues={getUserDetails(user)} validationSchema={signupValidationSchema}
        onSubmit={(values) => console.log(values)}
        >
      {({values}) => (
        <Form className="form">

         


          <div className="rowForm">
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
          </div>

           <div className="rowForm">
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
          </div>

        
          <div className="rowForm">
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
          </div>


          <div className="rowForm">
            <FormikInput
            name="tagline"
            className="tagline"
            label="Tagline"
            placeholder=""
            value={values.tagline}
            />
          </div>
             <div className="rowForm">
          <FormikInput
            className="bio"
            name="bio"
            label="Bio"
            placeholder=""
            value={values.bio}
            desc="Write a short introduction about yourself to let potential employers know about you"
            />
             </div>
        
         
      
          <ActionButtons handleSubmit={() => handleSubmit(values)} />
        </Form>
      )}
    </Formik>
    </Box>
  );
}