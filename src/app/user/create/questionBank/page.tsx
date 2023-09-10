"use client"

import { FormikInput } from "@/components/formik/FormikInput";
import { createSubjectTopicInitialValues } from "@/utils/formik/initialValues";
import { createSubjectTopicValidationScehma } from "@/utils/validationScehma";
import { Box, Button, Card, SxProps } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import FormTable from "./FormTable";
import { ICreateTopic } from "@/interfaces/formikInterfaces";
import Footer from "./Footer";
import { useSubject } from "@/hooks/exam/useSubject";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

const styles:SxProps = {
  margin: "10px",
  padding: "30px",
  ".form":{
    minHeight: "90vh",
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    // height:"15px",
    ".label":{
      color:"#5B5B5B",
      fontSize:"15px",
    },
    ".input":{
      borderRadius:"5px",
      
    }
  },
  ".subjectName .input":{
    width: "290px",
    height: "40px",
  },
  ".subjectDescription .input":{
    width: "290px",
    height: "40px",
  },
  ".error": {
    color: "red",
    pl: "10px",
    fontSize: "14px",
    padding: "0",
    maxWidth:"200px",
  },
  ".footerBtn":{
    width: "127px",
    height: "30px",
    flexShrink: "0",
    borderRadius: "5px",
    border: "1px solid #C2E830",
    color: "#969696",
    fontWeight:"500",
    textTransform:"captilize",
  },
  ".submitButton":{
    width: "127px",
    height: "30px",
    flexShrink: "0",
    borderRadius: "5px",
    border: "1px solid #C2E830",
    color: "#969696",
    fontWeight:"500",
    textTransform:"captilize",
    color:"#2200A5"
  },
  ".addBtn":{
    textTransform:"captilize",
    width: "70px",
    textTransform: "captilize",
    height: "23px",
    borderRadius: "5px",
    color: "#5b5b5b",

  },
  ".customInput":{
    height:"0px"
  }
}

export default function Page() {

  const {createSubjectAndTopics, loading} = useSubject();

  return (
    <Card sx={styles}>
      <Formik
        initialValues={createSubjectTopicInitialValues}
        validationSchema={createSubjectTopicValidationScehma}
        onSubmit={async(values) => { await createSubjectAndTopics(values)}}
      >
        {({values, resetForm, errors}) => (
          <Form className="form">
            <FormikInput
              className="subjectName"
              name="name"
              label="Question Bank Name"
              placeholder=""
              value={values.name}
            />
            <FormikInput
              className="subjectDescription"
              name="description"
              label="Question Bank Description"
              placeholder=""
              value={values.description}
            />
            <FieldArray name="topics">
              {({ push, remove }:{push: (obj: ICreateTopic) => void, remove: (index: number) => void}) => (
                <Box>
                  <FormTable />
                  {typeof errors.topics === "string" && <p className="error">{errors.topics}</p>}
                  <Button className="addBtn" variant="outlined" onClick={() =>push({description: "",id: Math.random(), name: ""})}>+ Add</Button>
                </Box>
              )}
            </FieldArray>
            <Footer>
              {/* <Button variant="outlined">Back</Button> */}
              <Button className="footerBtn" color="success" onClick={() => resetForm()} variant="outlined">Reset</Button>
              {loading ? <LoadingButton variant="contained" loading>Save</LoadingButton> : 
              <Button className="submitButton" color="success" type="submit" variant="outlined">Save</Button>}
            </Footer>
          </Form>
        )}
      </Formik>
    </Card>
  );
}