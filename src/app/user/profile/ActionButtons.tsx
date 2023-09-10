import { useUpdateUser } from '@/hooks/auth/useUpdateUser';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { Box, Button, SxProps} from '@mui/material';
import { useFormikContext } from 'formik';

const styles:SxProps = {
  width: "100%",
  padding:"30px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  pr:"0",
  pb: "0",
  gap: "15px",
  mt:"90px",
  "button":{
    width: "127px",
    height: "28px",
    flexShrink: "0",
    borderRadius: "5px",
    border: "1px solid #C2E830",
    color: "#969696",
    fontWeight:"500",
  },
  ".save":{
    color:"#2200A5"
  }
}

export default function ActionButtons({handleSubmit}:{handleSubmit: () => any}) {

  const formikContext = useFormikContext();
  const {loading} = useUpdateUser();

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
      <LoadingButton loading={loading} onClick={handleSubmit} className='save' variant='outlined'>Save</LoadingButton>
    </Box>
  )
}