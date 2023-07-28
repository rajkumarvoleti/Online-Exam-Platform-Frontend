import CircularNumberButton from '@/components/buttons/CircularNumberButton';
import { INumberButtonType } from '@/interfaces/buttonInterfaces';
import {Box, SxProps} from '@mui/material';

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  ".number":{
    borderRadius: "50%",
  },
}

export default function QuestionResponseInfo({number, text, type}:{number:number, text:string, type:INumberButtonType}) {
  return (
    <Box className="buttonBox" sx={styles}>
      <CircularNumberButton type={type} size='small' />
      <p className='buttonText'>{text}</p>
    </Box>
  )
}