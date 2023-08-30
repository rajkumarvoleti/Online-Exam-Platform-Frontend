import { Box, SxProps } from "@mui/material";
import Footer from "./Footer";
import { Form, Formik } from "formik";
import { testDetailsInitialValues } from "@/utils/formik/initialValues";
import { testDetailsValidationSchems } from "@/utils/validationScehma";
import { FormikInput } from "@/components/formik/FormikInput";
import { IAutoCompleteOption } from "@/interfaces/inputInterfaces";

const styles:SxProps = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  ".form":{
    width: "100%",
    padding: "20px",
    display: "flex",
    flexWrap:"wrap",
    "> *":{
      margin: "0 10px",
    },
    ".input":{
      width: "240px",
      height: "40px",
    },
  },
}

const options:IAutoCompleteOption[] = [
  {
    id: "1",
    label: "One",
  },
  {
    id: "2",
    label: "Two",
  },
  {
    id: "3",
    label: "Three",
  },
]

export default function TestDetailsForm() {
  return (
    <Box sx={styles}>
      <Formik
        initialValues={testDetailsInitialValues}
        validationSchema={testDetailsValidationSchems}
        onSubmit={(values) => console.log(values)}
      >
        {({values}) => (
          <Form className="form">
            <FormikInput
              name="categoryName"
              label="Category Name"
              placeholder=""
              value={values.categoryName}
            />
            <FormikInput
              name="testType"
              label="Test Type"
              placeholder=""
              value={values.testType}
            />
            <FormikInput
              name="questionBankName"
              label="Question Bank Name"
              placeholder=""
              value={values.questionBankName}
            />
            <FormikInput
              name="testDescription"
              label="Test Description"
              placeholder=""
              value={values.testDescription}
            />
          </Form>
        )}
      </Formik>
      <Footer />
    </Box>
  )
}