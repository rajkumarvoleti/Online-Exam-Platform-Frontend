import ModalComponent from '@/components/ModalComponent';
import { useQuiz } from '@/hooks/useQuiz';
import {Box, Button, Card, SxProps} from '@mui/material';
import { useRouter } from 'next-nprogress-bar';
import { useState } from 'react';
import ConfirmSubmit from './ConfirmSubmit';

const styles:SxProps = {
  display: "flex",
  padding : "20px 40px",
  width: "100%",
  position: "sticky",
  bottom: 0,
  zIndex: 2,
  "button":{
    height: "38px",
    flexShrink: "0",
    borderRadius: "6px",
  },
  ".container1":{
    flex :"3",
    display: "flex",
    gap: "10px",
  },
  ".container2":{
    flex: "1",
  },
  ".removeResponse":{
    border: "1px solid #676767",
    ".buttonText": {
      color: "#676767",
    },
  },
  ".markForReview":{
    border: "1px solid #C782FF",
    ".buttonText": {
      color: "#C782FF",
    },
  },
  ".prev":{
    border: "1px solid #C2E830",
    marginLeft: "auto",
  },
  ".next":{
    border: "1px solid #C2E830",
    ".buttonText": {
      color: "#969696",
    },
  },
  ".disabled":{
    border: "0.5px solid #E9E9E9",
    ".buttonText": {
      color: "#E9E9E9",
    },
  },
  ".submit":{
    border: "1px solid #C2E830",
    ".buttonText": {
      color: "#2200A5",
    },
  },
}

export default function Footer({examId}:{examId:number}){

  const {attemptQuestion,reviewQuestion,goToNextQuestion, goToPrevQuestion, isLastQuestion, isMarked, isFirstQuestion} = useQuiz();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={styles}>
      <Box className="container container1">
        <Button onClick={() => attemptQuestion(null)} className='removeResponse' variant='outlined'>
          <p className="buttonText">Remove Response</p>
        </Button>
        <Button onClick={() => reviewQuestion(!isMarked)} className='markForReview' variant='outlined'>
          <p className="buttonText">
            {isMarked ? "Unmark for Review" : "Mark for Review"}
          </p>
        </Button>
        <Button disabled={isFirstQuestion} onClick={goToPrevQuestion} className={isFirstQuestion ? "prev disabled" : "prev"} variant='outlined'>
          <p className="buttonText">Prev</p>
        </Button>
        <Button disabled={isLastQuestion} onClick={goToNextQuestion} className={isLastQuestion ? " next disabled" : "next"} variant='outlined'>
          <p className="buttonText">Next</p>
        </Button>
      </Box>
      <Box className="container container2 center">
        <Button onClick={handleOpen} className='submit' variant='outlined'>
          <p className="buttonText">Submit</p>
        </Button>
      </Box>
      <ConfirmSubmit examId={examId} handleClose={handleClose} open={open} />
    </Card>
  )
}