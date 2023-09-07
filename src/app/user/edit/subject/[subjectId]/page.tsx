"use client"

import { FormikInput } from "@/components/formik/FormikInput";
import { createSubjectTopicInitialValues } from "@/utils/formik/initialValues";
import { createSubjectTopicValidationScehma, createSubjectValidationSchema } from "@/utils/validationScehma";
import { Box, Button, CircularProgress, SxProps } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import FormTable from "./FormTable";
import { ICreateTopic } from "@/interfaces/formikInterfaces";
import Footer from "./Footer";
import { useSubject } from "@/hooks/exam/useSubject";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { getSubjectRequest } from "@/api/subject";
import { getAllTopicsRequest } from "@/api/topic";
import { useQueries } from "@tanstack/react-query";
import { ISubject, ITopic } from "@/interfaces/examInterfaces";
import { useEffect, useState } from "react";

const styles:SxProps = {
  padding: "30px",
  ".form":{
    minHeight: "90vh",
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
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
}

export default function Page({params}:{params:{subjectId:string}}) {

  const {updateSubject, loading} = useSubject();
  const subjectId = parseInt(params.subjectId,10);
  const results = useQueries({queries: [
    {queryKey: ["subject",subjectId],queryFn: async() =>  await getSubjectRequest(subjectId)},
    {queryKey: ["topics",subjectId],queryFn: async() => await getAllTopicsRequest({subjectId})},
  ]});

  const [subject, setSubject] = useState<ISubject>({name: "",description: "",topicsCount: 0});
  const [topics, setTopics] = useState<ITopic[]>([]);

  useEffect(() => {
    if(results[0].data && results[0].data.subject)
      setSubject(results[0].data.subject);
  }, [results[0].data])

  useEffect(() => {
    if(results[1].data && results[1].data.topics)
      setTopics(results[1].data.topics);
  }, [results[1].data])
  

  if(results[0].isLoading || results[1].isLoading)
  <Box className='center' sx={styles}><CircularProgress /></Box>

  if(results[0].error || results[1].error)
    <Box className='center' sx={styles}>Something went wrong</Box>

  

  return (
    <Box sx={styles}>
      <Formik
        initialValues={subject}
        validationSchema={createSubjectValidationSchema}
        onSubmit={async(values) => { await updateSubject(values)}}
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
                  <FormTable topics={topics} />
                  {/* {typeof errors.topics === "string" && <p className="error">{errors.topics}</p>}
                  <Button variant="outlined" onClick={() =>push({description: "",id: Math.random(), name: ""})}>+ Add</Button> */}
                </Box>
              )}
            </FieldArray>
            <Footer>
              <Button variant="outlined">Back</Button>
              <Button onClick={() => resetForm()} variant="outlined">Reset</Button>
              {loading ? <LoadingButton loading /> : 
              <Button type="submit" variant="outlined">Save</Button>}
            </Footer>
          </Form>
        )}
      </Formik>
    </Box>
  );
}