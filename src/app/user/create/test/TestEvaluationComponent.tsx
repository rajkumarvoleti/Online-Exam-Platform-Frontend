import { FormikInput } from '@/components/formik/FormikInput';
import { ITestSettingsForm } from '@/interfaces/formikInterfaces';
import {Box, SxProps} from '@mui/material';
import { useFormikContext } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';

const styles:SxProps = {
  h4:{
    color: "#000",
    fontSize: "20px",
    fontWeight: "600",
    mt: "40px",
  },
  ".form":{
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    label:{
      color: "#5B5B5B",
      m: 0,
    }
  }
}

export default function TestEvaluationComponent() {

  const {values, setFieldValue} = useFormikContext<ITestSettingsForm>();

  const handleTotalMarks = async() => {
    const total = values.marksPerQuestion * values.totalQuestions;
    await setFieldValue("totalMarks",total);
  }
  useEffect(() => {
    handleTotalMarks();
  }, [values.marksPerQuestion, values.totalQuestions])
  

  return (
    <Box sx={styles}>
      <h4>Test Evaluation</h4>
      <Box className="form">
        <FormikInput
          name="totalQuestions"
          label="Total Questions"
          type='number'
          placeholder=""
          disabled
          value={values.totalQuestions}
        />
        <FormikInput
          name="marksPerQuestion"
          label="Marks Per Question"
          type='number'
          placeholder=""
          value={values.marksPerQuestion}
        />
        <FormikInput
          name="totalMarks"
          label="Total Marks"
          type='number'
          disabled
          placeholder="RPA"
          value={values.totalMarks}
        />
        <FormikInput
          name="passPercentage"
          label="Pass Percentage %"
          type="number"
          placeholder=""
          value={values.passPercentage}
        />
        <FormikInput
          name="negativeMarks"
          label="Negative Marks"
          type="number"
          placeholder=""
          value={values.negativeMarks}
        />
      </Box>

    </Box>
  )
}