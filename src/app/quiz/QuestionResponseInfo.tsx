import CircularNumberButton from '@/components/buttons/CircularNumberButton';
import { useQuiz } from '@/hooks/useQuiz';
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

  const {getQuestionCountFromType} = useQuiz();

  return (
    <Box className="buttonBox" sx={styles}>
      <CircularNumberButton number={getQuestionCountFromType(type)} type={type} size='small' />
      <p className='buttonText'>{text}</p>
    </Box>
  )
}