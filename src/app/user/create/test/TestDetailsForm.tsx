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
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
  },
  ".form > *:last-child":{
    gridColumn: "span 2",
    ".input":{
      height: "200px",
      alignItems: "start",
    }
  }
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
              type="autocomplete"
              options={options}
              value={values.categoryName}
            />
            <FormikInput
              name="testType"
              label="Test Type"
              placeholder=""
              type="autocomplete"
              options={options}
              value={values.testType}
            />
            <FormikInput
              name="questionBankName"
              label="Question Bank Name"
              placeholder=""
              type="autocomplete"
              options={options}
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