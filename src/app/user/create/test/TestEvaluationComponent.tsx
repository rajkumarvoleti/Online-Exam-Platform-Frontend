import { FormikInput } from '@/components/formik/FormikInput';
import { testEvaluationInitialValues } from '@/utils/formik/initialValues';
import { testEvaluationValidationSchema } from '@/utils/validationScehma';
import {Box, SxProps} from '@mui/material';
import { Form, Formik } from 'formik';

const styles:SxProps = {
  h4:{
    color: "#000",
    fontSize: "20px",
    fontWeight: "600",
    mt: "40px",
  },
  form:{
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
  return (
    <Box sx={styles}>
      <h4>Test Evaluation</h4>
      <Formik
        initialValues={testEvaluationInitialValues}
        validationSchema={testEvaluationValidationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({values}) => (
          <Form className="form">
            <FormikInput
              name="totalQuestions"
              label="Test Questions"
              type='number'
              placeholder=""
              value={values.totalQuestions}
            />
            <FormikInput
              name="totalMarks"
              label="Total Marks"
              type='number'
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
          </Form>
        )}
      </Formik>
    </Box>
  )
}