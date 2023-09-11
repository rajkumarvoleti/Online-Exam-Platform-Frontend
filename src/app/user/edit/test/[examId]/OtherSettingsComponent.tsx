import {Box, RadioGroup, Radio, FormControlLabel, OutlinedInput, SxProps} from '@mui/material';

const styles:SxProps = {

}

export default function OtherSettingsComponent() {
  return (
    <Box sx={styles}>
      <h4>Other Settings</h4>
      <Box className="container">
        <Box className="group">
          <p>Type of Test</p>
          <RadioGroup row>
            <FormControlLabel value="public" control={<Radio />} label="Public" />
            <FormControlLabel value="private" control={<Radio />} label="Private" />
          </RadioGroup>
        </Box>
        <Box className="group">
          <p>Price</p>
          <RadioGroup row>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
        <Box className="smallInputGroup">
          <p>Amount:</p>
          <OutlinedInput className='muiInput' type='number' />
        </Box>
        <Box className="smallInputGroup">
          <p>Discount %:</p>
          <OutlinedInput className='muiInput' type='number' />
        </Box>
        <Box className="smallInputGroup">
          <p>Final Amount</p>
          <OutlinedInput className='muiInput' type='number' />
        </Box>
      </Box>
    </Box>
  )
}