import {Box, OutlinedInput, SxProps} from '@mui/material';

const styles:SxProps = {

}

export default function ResultDeclarationSettingsComponent() {
  return (
    <Box sx={styles}>
      <h4>Result Declaration Settings</h4>
      <Box className="container">
        <Box className="smallInputGroup">
          <p>Total Questions</p>
          <OutlinedInput className='muiInput' type='number' />
        </Box>
        <Box className="smallInputGroup">
          <p>Total Marks</p>
          <OutlinedInput className='muiInput' type='number' />
        </Box>
        <Box className="smallInputGroup">
          <p>Pass Percentage</p>
          <OutlinedInput className='muiInput' type='number' />
        </Box>
        <Box className="smallInputGroup">
          <p>Negative Marks</p>
          <OutlinedInput className='muiInput' type='number' />
          <p className='helperText'>Each Question</p>
        </Box>
      </Box>
    </Box>
  )
}