import {Box, Button, Divider, SxProps} from '@mui/material';
import TestSettingsComponent from './TestSettingsComponent';
import TestEvaluationComponent from './TestEvaluationComponent';
import ResultDeclarationSettingsComponent from './ResultDeclarationSettingsComponent';
import Footer from './Footer';
import { Form, Formik, useFormikContext } from 'formik';
import { testSettingsInitialValues } from '@/utils/formik/initialValues';
import { testSettingsValidationScehma } from '@/utils/validationScehma';
import useCreateTest from '@/hooks/useCreateTest';
import { ITestSettingsForm } from '@/interfaces/formikInterfaces';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

const styles:SxProps = {
  padding: "30px",
  h4:{
    pb: "20px",
  },
  ".divider":{
    m: "20px 0",
  },
  ".durationGroup, .smallInputGroup":{
    input:{
      width: "60px",
    },
    span:{
      fontSize: "14px",
      pr: "5px",
    },
    ".muiInput":{
      mr: "15px",
    }
  },
  ".helperText":{
    m:"0",
  },
  ".container > *":{
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
    "> *:first-child":{
      width: "200px",
      flexShrink: "0",
    },
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
}

function FormikForm() {

  const {handleSettingsForm, handleBack, publishAttempted, handleNext,testData} = useCreateTest(); 
  const {values, resetForm, submitForm, isValid, setFieldValue} = useFormikContext<ITestSettingsForm>();

  useEffect(() => {
    handleSettingsForm(values);
  }, [values])

  useEffect(() => {
    const handleTotalQuestion = async() => {
      const value = testData.testDetails.totalQuestions; 
      await setFieldValue("totalQuestions",value);
    }
    handleTotalQuestion();
  }, [testData.testDetails.totalQuestions])
  

  useEffect(() => {
    async function submit() {
      await submitForm();
    }
    if(publishAttempted) submit();
  }, [publishAttempted])
  
  return (
    <Form  id='settingsForm' className="form">
      <TestSettingsComponent />
      <Divider className='divider' />
      <TestEvaluationComponent />
      <Divider className='divider' />
      <ResultDeclarationSettingsComponent />
      <Footer>
        <Button className='footerBtn' onClick={handleBack} color="success" variant="outlined">Back</Button>
        <Button className='footerBtn' onClick={() => {
          resetForm();
          handleSettingsForm(testSettingsInitialValues);
        }} color="success" variant="outlined">Reset</Button>
        <Button className='submitButton' onClick={() => isValid && handleNext()} type='submit' color="success" variant="outlined">Next</Button>
      </Footer>
    </Form>
  )
}

export default function TestSettingsForm() {

  const {handleSettingsForm, testData} = useCreateTest(); 

  return (
    <Box sx={styles}>
      <Formik
        initialValues={testData.testSettings}
        validationSchema={testSettingsValidationScehma}
        onSubmit={() => {}}
        onReset={() => handleSettingsForm(testSettingsInitialValues)}
      >
        {({}) => (
          <FormikForm />
        )}
        </Formik>
    </Box>
  )
}