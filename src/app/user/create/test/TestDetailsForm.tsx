import { Box, Button, CircularProgress, SelectChangeEvent, SxProps } from "@mui/material";
import Footer from "./Footer";
import { FieldArray, Form, Formik, useFormikContext } from "formik";
import { selectedTopicInitialValues, testDetailsInitialValues } from "@/utils/formik/initialValues";
import { testDetailsValidationSchema } from "@/utils/validationScehma";
import { FormikInput } from "@/components/formik/FormikInput";
import { IAutoCompleteOption } from "@/interfaces/inputInterfaces";
import { useQuery } from "@tanstack/react-query";
import { getAllQuestionBanksRequest } from "@/api/subject";
import { IQuestionBank, IQuestionBankTopic, ISelectedQuestionBankTopic } from "@/interfaces/otherInterfaces";
import TestDetailsTable from "./TestDetailsTable";
import CircleIcon from '@mui/icons-material/Circle';
import useCreateTest from "@/hooks/useCreateTest";
import { ITestDetailsForm } from "@/interfaces/formikInterfaces";
import { useEffect } from "react";

const styles:SxProps = {
  width: "100%",
  height: "100%",
  minHeight: "75vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  ".form":{
    width: "100%",
    minHeight: "75vh",
    height: "100%",
    padding: "20px",
    display: "flex",
    flexWrap:"wrap",
    "> *":{
      margin: "0 10px",
    },
    ".input":{
      width: "220px",
      height: "40px",
    },
    ".desc":{
      margin: "0",
    },
  },
  ".tableHeading":{
    fontSize: "18px",
    fontWeight: "600",
    color: "#000",
    margin: "20px 10px"
  },
  ".details":{
    display: "flex",
    alignItems:"center",
    gap: "30px",
    m: "20px",
    mb: "0",
    ".icon":{
      width: "15px",
      height: "15px",
    },
    "> *":{
      display: "flex",
      gap :"10px",
      // alignItems: "center",
    },
    ".text":{
      color: "#000",
      span:{
        fontWeight: "600",
      }
    }
  },
  ".easy":{
    color: "#199E54"
  },
  ".medium":{
    color: "#2200A5"
  },
  ".hard":{
    color: "#FF0101"
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

  const { data, isLoading, error } = useQuery(["questionBanks"], getAllQuestionBanksRequest);
  const {handleDetailsForm, publishAttempted, validateForms, handleNext} = useCreateTest();
  const {values, resetForm, submitForm, isValid, setFieldValue} = useFormikContext<ITestDetailsForm>();

  useEffect(() => {
    handleDetailsForm(values);
  }, [values])

  useEffect(() => {
    async function submit() {
      await submitForm();
    }
    if(publishAttempted) submit();
  }, [publishAttempted])

  const questionBanks:IQuestionBank[] = data?.questionBanks;

  if(isLoading)
    return <Box className="form center"><CircularProgress /></Box>

  if(error || !questionBanks)
    return <Box className="center form">Something went wrong</Box>


  const options:IAutoCompleteOption[] = questionBanks?.map(bank => ({id: JSON.stringify(bank.id), label: bank.name}));
  
  return (
    <Form id="detailsForm" className="form">
      <FormikInput
        name="testName"
        label="Test Name"
        placeholder="name"
        value={values.testName}
      />
      <FormikInput
        name="testDescription"
        label="Test Description"
        placeholder="RPA"
        value={values.testDescription}
      />
      <FormikInput
        name="totalQuestions"
        label="Total Questions In Test"
        type="number"
        placeholder="30"
        disabled
        value={values.totalQuestions}
      />
      <FieldArray name="questionBankTopics">
      {({push}:{push: (obj: ISelectedQuestionBankTopic) => void}) => (
        <Box className="tableContainer">
          <TestDetailsTable questionBanks={questionBanks}/>
          <Button variant="outlined" onClick={() => push({...selectedTopicInitialValues, uuid:Math.random()})}>+ Add</Button>
        </Box>
        )}
        </FieldArray>
        <Box className="details">
          <p className="text">Questions Available For Each Selected Question Bank</p>
          <Box className="complexityDetails">
            <CircleIcon className="icon hard" />
            <p className="text hard">Hard</p>
          </Box>
          <Box className="complexityDetails">
            <CircleIcon className="icon medium" />
            <p className="text medium">Medium</p>
          </Box>
          <Box className="complexityDetails">
            <CircleIcon className="icon easy" />
            <p className="text easy">Easy</p>
          </Box>
        </Box>
        <Box className="details">
          <p className="text"><span>Note :</span> Enter Atleast One Question in Each Selected Question Bank</p>
        </Box>
        <Footer>
          <Button className='footerBtn' color="success" variant="outlined">Back</Button>
          <Button className='footerBtn' onClick={() => {
            resetForm();
            handleDetailsForm(testDetailsInitialValues);
            }} color="success" variant="outlined">Reset</Button>
          <Button className="submitButton" onClick={() => isValid && handleNext()} type="submit" color="success" variant="outlined">Next</Button>
        </Footer>
    </Form>
  )
} 

export default function TestDetailsForm() {

  const { testData} = useCreateTest();

  return (
    <Box sx={styles}>
      <Formik
        initialValues={testData.testDetails}
        validationSchema={testDetailsValidationSchema}
        onSubmit={() => {}}
      >
        {({}) => (
          <FormikForm />
        )}
      </Formik>
    </Box>
  )
}