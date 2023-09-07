import { FormikInput } from '@/components/formik/FormikInput';
import { IPricingType, IPromoCode, ITestPricingForm } from '@/interfaces/formikInterfaces';
import { testPricingInitialValues } from '@/utils/formik/initialValues';
import { testPricingValidationSchema } from '@/utils/validationScehma';
import {Box, Button, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps} from '@mui/material';
import { FieldArray, Form, Formik, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import PromoCodesTable from './PromoCodesTable';
import Footer from './Footer';
import useCreateTest from '@/hooks/useCreateTest';

const styles:SxProps = {
  margin: "20px",
  ".basicInputs":{
    margin: "20px 0",
  },
  ".customInput":{
    display: "flex",
    alignItems: "center",
    label: {
      width: "100px",
      color: "#5B5B5B"
    },
    ".input":{
      width: "200px",
      height: "40px",
    }
  },
}

function FormikForm() {

  const {values, handleChange, resetForm, submitForm, isValid} = useFormikContext<ITestPricingForm>();
  const {handlePricingForm, handleBack, publishAttempted, handleNext} = useCreateTest();

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
          <InputLabel className='label'>Test Type</InputLabel>
          <Select className='input' name='testType' onChange={handleChange} value={values.testType}>
            <MenuItem value="private">Private</MenuItem>
            <MenuItem value="open">Open</MenuItem>
          </Select>
        </Box>
        {values.testType === "private" && 
          <FormikInput
            name="price"
            label="Actual Price"
            placeholder="0"
            type='number'
            value={values.price}
          />
        }
      </Box>
      {values.testType === "private" && <FieldArray name="promoCodes">
      {({ push, remove }:{push: (obj: IPromoCode) => void, remove: (index: number) => void}) => (
          <Box>
            <PromoCodesTable remove={(id:number) => {
              console.log("removing");
              const promoCode = values.promoCodes.find(code => code.id === id);
              if(!promoCode) return;
              const index = values.promoCodes.indexOf(promoCode);
              remove(index);
            }} />
            <Button variant="outlined" onClick={() => push({code:"",offer:0, id:Math.random()})}>+ Add</Button>
          </Box>
        )}
        </FieldArray>}
        <Footer>
          <Button onClick={handleBack} color="success" variant="outlined">Back</Button>
          <Button onClick={() => resetForm()} color="success" variant="outlined">Reset</Button>
          <Button onClick={() => isValid && handleNext()} type='submit' color="success" variant="outlined">Next</Button>
        </Footer>
    </Form>
  )
}

export default function PricingFormComponent() {

  const { handlePricingForm, testData} = useCreateTest();

  return (
    <Box sx={styles}>
      <Formik
        initialValues={testData.pricing}
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