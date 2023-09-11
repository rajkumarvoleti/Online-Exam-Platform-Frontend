import { FormikInput } from '@/components/formik/FormikInput';
import useEditTest from '@/hooks/useEditTest';
import { ITestSettingsForm } from '@/interfaces/formikInterfaces';
import {Box, SxProps} from '@mui/material';
import { useFormikContext } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';

const styles:SxProps = {
  h3:{
    color: "#000",
    fontSize: "20px",
    fontWeight: "600",
    mt: "20px",
  },
  ".form":{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "5px",
    label:{
      m: 0,
      fontSize:"14px",
      color:"#5B5B5B",
    },
    ".input":{
      width: "185px",
      borderRadius:"5px",
    },

  }
}

export default function TestEvaluationComponent() {

  const {values, setFieldValue} = useFormikContext<ITestSettingsForm>();
  const {testData} = useEditTest();

  const handleTotalMarks = async() => {
    const total = values.marksPerQuestion * values.totalQuestions;
    await setFieldValue("totalMarks",total);
  }
  useEffect(() => {
    handleTotalMarks();
  }, [values.marksPerQuestion, values.totalQuestions])

  return (
    <Box sx={styles}>
      <h3>Test Evaluation</h3>
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