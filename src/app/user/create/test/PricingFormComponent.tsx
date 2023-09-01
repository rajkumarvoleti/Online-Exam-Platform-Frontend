import { FormikInput } from '@/components/formik/FormikInput';
import { IPricingType, IPromoCode } from '@/interfaces/formikInterfaces';
import { testPricingInitialValues } from '@/utils/formik/initialValues';
import { testPricingValidationSchema } from '@/utils/validationScehma';
import {Box, Button, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps} from '@mui/material';
import { FieldArray, Form, Formik } from 'formik';
import { useState } from 'react';
import PromoCodesTable from './PromoCodesTable';

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

export default function PricingFormComponent() {

  const [pricingType, setPricingType] = useState<IPricingType>("private");

  const handleSelect = (e:SelectChangeEvent) => {
    setPricingType(e.target.value as IPricingType);
  }

  return (
    <Box sx={styles}>
      <Formik
        initialValues={testPricingInitialValues}
        validationSchema={testPricingValidationSchema}
        
        onSubmit={(values) => console.log(values)}
      >
        {({values}) => (
          <Form className="form">
            <Box className="basicInputs">
              <Box className="customInput">
                <InputLabel className='label'>Test Type</InputLabel>
                <Select className='input' name='testType' onChange={handleSelect} value={pricingType}>
                  <MenuItem value="private">Private</MenuItem>
                  <MenuItem value="open">Open</MenuItem>
                </Select>
              </Box>
              {pricingType === "private" && 
                <FormikInput
                name="price"
                label="Actual Price"
                placeholder="0"
                type='number'
                value={values.price}
                />
              }
            </Box>
            {pricingType === "private" && <FieldArray name="promoCodes">
            {({ push, remove }:{push: (obj: IPromoCode) => void, remove: (index: number) => void}) => (
                <Box>
                  <PromoCodesTable remove={(id:number) => {
                    const promoCode = values.promoCodes.find(code => code.id === id);
                    if(!promoCode) return;
                    const index = values.promoCodes.indexOf(promoCode);
                    remove(index);
                  }} />
                  <Button variant="outlined" onClick={() => push({code:"",offer:0, id:Math.random()})}>+ Add</Button>
                </Box>
              )}
              </FieldArray>}
          </Form>
        )}
      </Formik>
    </Box>
  )
}