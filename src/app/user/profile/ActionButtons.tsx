import { Box, Button, SxProps} from '@mui/material';
import { useFormikContext } from 'formik';

const styles:SxProps = {
  width: "100%",
  padding:"30px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  gap: "15px",
  "button":{
    width: "153px",
    height: "38px",
    flexShrink: "0",
    borderRadius: "6px",
    border: "1px solid #C2E830",
    color: "#969696",
  },
  ".save":{
    color:"#2200A5"
  }
}

export default function ActionButtons({handleSubmit}:{handleSubmit: () => any}) {

  const formikContext = useFormikContext();

  const handleCancel = () => {
    console.log("cancel")
  }
  const handleReset = () => {
    formikContext.resetForm();
  }

  return (
    <Box className="buttons" sx={styles}>
      <Button onClick={handleReset} variant='outlined'>Reset</Button>
      <Button onClick={handleCancel} variant='outlined'>Cancel</Button>
      <Button onClick={handleSubmit} className='save' variant='outlined'>Save</Button>
    </Box>
  )
}