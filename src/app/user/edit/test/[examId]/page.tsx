"use client"

import { Box, Card, CircularProgress, SxProps } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import TestDetailsForm from "./TestDetailsForm";
import TestSettingsForm from "./TestSettingsForm";
import PricingFormComponent from "./PricingFormComponent";
import PublishTestComponent from "./PublishTestComponent";
import { useQuery } from "@tanstack/react-query";
import { getExamDetailsRequest } from "@/api/exam";
import useEditTest from "@/hooks/useEditTest";
import { ISelectedQuestionBankTopic } from "@/interfaces/otherInterfaces";
import { ICreateTestData, ITestDetailsForm, ITestPricingForm, ITestSettingsForm } from "@/interfaces/formikInterfaces";

const styles:SxProps = {
  minHeight:"90vh",
  " > *":{
    margin: "10px",
  },
  ".main":{
    width:"100%",
    height:"100%",
    display: "flex",
  },
  ".forms":{
    m: "0 10px",
    width: "100%",
    height:"100%",
    minHeight: "73vh",
  // padding:" 20px 100px 10px 40px",
  boxShadow:"none",

  }
}

export default function Page({params}:{params:{examId:string}}){

  const id = parseInt(params.examId,10);
  const {data, error, isLoading} = useQuery(["examEditData",id],async() => await getExamDetailsRequest(id));
  const {index, setIndex, initializeData, testData, initializeDataLoading, resetData} = useEditTest();

  useEffect(() => {
    if(data && data.exam)
      initializeData(data.exam);
    return () => {
      resetData();
    }
  }, [data])


  if(error)
    return <Box className="center" sx={styles}>Something went wrong</Box>

  if(isLoading || initializeDataLoading)
    return <Box className="center" sx={styles}><CircularProgress /></Box>
  
  if(!data || !data.exam)
    return <></>

  const exam:ICreateTestData = data.exam;
  
  const questionBankTopics:ISelectedQuestionBankTopic[] = exam.testDetails.questionBankTopics.map(topic => ({...topic,uuid:Math.random()}));
  const marksPerQuestion = exam.testSettings.totalMarks/exam.testDetails.totalQuestions;
  const testDurationHours = Math.floor(exam.testSettings.testDuration / 60);
  const testDurationMinutes = exam.testSettings.testDuration % 60;
  const testDetails:ITestDetailsForm =  {...exam.testDetails,questionBankTopics};
  const testSettings:ITestSettingsForm = {...exam.testSettings,marksPerQuestion,testDurationHours,testDurationMinutes};
  const pricing:ITestPricingForm = {...exam.pricing};
  
  return (
    <Box sx={styles}>
      <Header index={index} />
      <Box className="main">
        <SideBar index={index} setIndex={setIndex} />
        <Card className="forms">
          {index === 0 && <TestDetailsForm initialValues={testData.testDetails} />}
          {index === 1 && <TestSettingsForm initialValues={testData.testSettings} />}
          {index === 2 && <PricingFormComponent initialValues={testData.pricing} />}
          {index === 3 && <PublishTestComponent id={id} />}
        </Card>
      </Box>
    </Box>
  );
}