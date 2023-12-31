import { FormikInput } from '@/components/formik/FormikInput';
import { IPricingType, IPromoCode, ITestDetailsForm, ITestPricingForm } from '@/interfaces/formikInterfaces';
import { testPricingInitialValues } from '@/utils/formik/initialValues';
import { testPricingValidationSchema } from '@/utils/validationScehma';
import {Box, Button, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps} from '@mui/material';
import { FieldArray, Form, Formik, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import PromoCodesTable from './PromoCodesTable';
import Footer from './Footer';
import useEditTest from '@/hooks/useEditTest';

const styles:SxProps = {
  // margin: "20px",
  padding:"0",
  ".basicInputs":{
  },
  ".customInput":{
    display: "flex",
    alignItems: "center",
    m: "30px 20px",
    label: {
      width: "100px",
      color: "#5B5B5B"
    },
    ".input":{
      width: "250px",
      height: "35px",
      borderRadius:"5px",
    }
  },
  ".table":{
    m: "0px 20px",
    borderRadius:"5px",
    "> *":{
      m: "10px 0",
    },
    ".MuiTableRow-root":{
      height:"46px",
      borderRadius:"5px",
      
    },
    ".headingRow .MuiTableCell-root":{
      color:" #5B5B5B",
      padding: "6px",
      height: "0px", 
      fontSize: "14px",
    },
    ".customInput":{
      m: "0px 0px",

    }
  },
  ".form":{
    display: "flex",
    flexDirection: "column",
    minHeight: "68vh",
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
    height: "25px",
    flexShrink: "0",
    borderRadius: "5px",
    border: "1px solid #C2E830",
    fontWeight:"500",
    textTransform:"captilize",
    color:"#2200A5"
  },
  ".addBtn":{
    // textTransform:"captilize",
    width: "75px",
    height: "23px",
    borderRadius: "5px",
    color: "#5b5b5b",

  }


}

function FormikForm() {

  const {values, handleChange, resetForm, submitForm, isValid} = useFormikContext<ITestPricingForm>();
  const {handlePricingForm, handleBack, publishAttempted, handleNext} = useEditTest();

  useEffect(() => {
    handlePricingForm(values);
  }, [values])
  
  useEffect(() => {
    async function submit() {
      await submitForm();
    }
    if(publishAttempted) submit();
  }, [publishAttempted])

  return (
    <Form id='pricingForm' className="form">
      <Box className="basicInputs">
        <Box className="customInput">
          <InputLabel className='label'>Test Type :</InputLabel>
          <Select className='input' name='testType' onChange={handleChange} value={values.testType}>
            <MenuItem value="private">Private </MenuItem>
            <MenuItem value="open">Open</MenuItem>
          </Select>
        </Box>
        {values.testType === "private" && 
          <FormikInput
            name="price"
            label="Actual Price :"
            placeholder="0"
            type='number'
            value={values.price}
          />
        }
      </Box>
      {values.testType === "private" && <FieldArray name="promoCodes">
      {({ push, remove }:{push: (obj: IPromoCode) => void, remove: (index: number) => void}) => (
          <Box className="table">
            <PromoCodesTable remove={(id:number) => {
              console.log("removing");
              const promoCode = values.promoCodes.find(code => code.id === id);
              if(!promoCode) return;
              const index = values.promoCodes.indexOf(promoCode);
              remove(index);
            }} />
            <Button className="addBtn" variant="outlined" onClick={() => push({code:"",offer:0, id:Math.random()})}>+ Add</Button>
          </Box>
        )}
        </FieldArray>}
        <Footer >
          <Button className="footerBtn" onClick={handleBack} color="success" variant="outlined">Back</Button>
          <Button className="footerBtn" onClick={() => resetForm()} color="success" variant="outlined">Reset</Button>
          <Button  className='submitButton' onClick={() => isValid && handleNext()} type='submit' color="success" variant="outlined">Next</Button>
        </Footer>
    </Form>
  )
}

export default function PricingFormComponent({initialValues}:{initialValues:ITestPricingForm}) {

  const { handlePricingForm, testData} = useEditTest();

  return (
    <Box sx={styles}>
      <Formik
        
        initialValues={initialValues}
        validationSchema={testPricingValidationSchema}
        onReset={() => handlePricingForm(testPricingInitialValues)}
        onSubmit={() => {}}
      >
        {({}) => (
          <FormikForm />
        )}
      </Formik>
    </Box>
  )
}