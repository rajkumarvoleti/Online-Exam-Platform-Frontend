import {Box, Divider, SxProps} from '@mui/material';
import TestSettingsComponent from './TestSettingsComponent';
import TestEvaluationComponent from './TestEvaluationComponent';
import ResultDeclarationSettingsComponent from './ResultDeclarationSettingsComponent';
import PrivateSettingsComponent from './PrivateSettingsComponent';
import OtherSettingsComponent from './OtherSettingsComponent';

const styles:SxProps = {
  padding: "30px",
  h4:{
    pb: "20px",
  },
  ".divider":{
    m: "20px 0",
  },
  ".durationGroup, .smallInputGroup":{
    input:{
      width: "60px",
    },
    span:{
      fontSize: "14px",
      pr: "5px",
    },
    ".muiInput":{
      mr: "15px",
    }
  },
  ".helperText":{
    m:"0",
  },
  ".container > *":{
    display: "flex",
    alignItems: "center",
    margin: "15px 0",
    "> *:first-child":{
      width: "200px",
      flexShrink: "0",
    },
  }
}

export default function TestSettingsForm() {
  return (
    <Box sx={styles}>
      <TestSettingsComponent />
      <Divider className='divider' />
      <TestEvaluationComponent />
      <Divider className='divider' />
      <ResultDeclarationSettingsComponent />
      <Divider className='divider' />
      <PrivateSettingsComponent />
      <Divider className='divider' />
      <OtherSettingsComponent />
    </Box>
  )
}