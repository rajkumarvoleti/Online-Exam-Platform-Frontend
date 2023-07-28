import { FormikInput } from "@/components/formik/FormikInput";
import { Box } from "@mui/material";

export default function UserBasicDetails() {
  return (
    <Box>
      <FormikInput
        name="firstName"
        label="Email"
        placeholder="Pallanarendra1997@gmail.com"
        value={"Suresh.Kotyada@gmail.com"}
      />
      <FormikInput
        name="email"
        label="Email"
        placeholder="Pallanarendra1997@gmail.com"
        value={"Suresh.Kotyada@gmail.com"}
      />
      <FormikInput
        name="email"
        label="Email"
        placeholder="Pallanarendra1997@gmail.com"
        value={"Suresh.Kotyada@gmail.com"}
      />
    </Box>
  )
}