import { FormikInput } from '@/components/formik/FormikInput';
import { ITestSettingsForm } from '@/interfaces/formikInterfaces';
import {Box, FormControlLabel, Radio, RadioGroup, SxProps} from '@mui/material';
import { FormikHandlers, useFormikContext } from 'formik';

const styles:SxProps = {
  h4:{
    color: "#000",
    fontSize: "20px",
    fontWeight: "600",
    mt: "40px",
  },
  ".radioGroups":{
    display: "flex",
    gap:"20px",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "900px",
  },
  ".radioGroup":{
    display: "flex",
    alignItems: "flex-start",
  },
  ".radioHead":{
    color: "#000",
    width: "180px",
    m: "10px 0"
  },
  ".note":{
    width: "100%",
  },
  ".note .input":{
    width: "100%",
    height: "150px",
  }
}

const resultFormatOptions = [
  {
    id: "marks",
    label: "Marks",
  },
  {
    id: "passFail",
    label: "Pass / Fail",
  },
  {
    id: "rank",
    label: "Rank",
  },
  {
    id: "percentage",
    label: "Percentage",
  },
]

const testDeclarationOptions = [
  {
    id: "showResultAfterEachQuestion",
    label: "Show Result After Each Question",
  },
  {
    id: "immediatelyAfterExamCompletion",
    label: "Immediately After Exam Completion",
  },
  {
    id: "sendResultsViaEmailOnly",
    label: "Send Results Via Email Only",
  },
  {
    id: "dontDeclare",
    label: "Don't Declare",
  },
]

export default function ResultDeclarationSettingsComponent() {

  const {handleChange, values} = useFormikContext<ITestSettingsForm>();

  return (
    <Box sx={styles}>
      <h4>Result Declaration Settings</h4>
      <Box className="radioGroups">
        <Box className="radioGroup">
          <p className='radioHead'>Result Format: </p>
          <RadioGroup value={values.resultFormat} onChange={handleChange} name='resultFormat'>
            {resultFormatOptions.map(opt => (
              <FormControlLabel key={opt.id} value={opt.id} control={<Radio color='default' size='small' />} label={opt.label} />
            ))}
          </RadioGroup>
        </Box>
        <Box className="radioGroup">
          <p className='radioHead'>Test Declaration: </p>
          <RadioGroup value={values.testDeclaration} onChange={handleChange} name='testDeclaration'>
            {testDeclarationOptions.map(opt => (
              <FormControlLabel key={opt.id} value={opt.id} control={<Radio color='default' size='small' />} label={opt.label} />
            ))}
          </RadioGroup>
        </Box>
        <FormikInput
          name="note"
          label="Note"
          className='note'
          placeholder=""
          value={values.note}
        />
      </Box>
    </Box>
  )
}