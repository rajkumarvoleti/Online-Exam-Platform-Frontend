import CircularNumberButton from '@/components/buttons/CircularNumberButton';
import { useQuiz } from '@/hooks/useQuiz';
import { INumberButtonType } from '@/interfaces/buttonInterfaces';
import {Box, SxProps} from '@mui/material';
import { useEffect, useState } from 'react';

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  ".number":{
    borderRadius: "50%",
  },
}

export default function QuestionResponseInfo({ text, type}:{ text:string, type:INumberButtonType}) {

  const {getQuestionCountFromType} = useQuiz();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(number => getQuestionCountFromType(type));
  }, [type, getQuestionCountFromType])
  

  return (
    <Box className="buttonBox" sx={styles}>
      <CircularNumberButton number={number} type={type} size='small' />
      <p className='buttonText'>{text}</p>
    </Box>
  )
}