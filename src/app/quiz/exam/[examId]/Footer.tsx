import ModalComponent from '@/components/ModalComponent';
import { useQuiz } from '@/hooks/useQuiz';
import {Box, Button, Card, SxProps} from '@mui/material';
import { useRouter } from 'next-nprogress-bar';

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
  ".saveAndNext":{
    marginLeft: "auto",
    border: "1px solid #C2E830",
    ".buttonText": {
      color: "#969696",
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

  const {attemptQuestion,reviewQuestion,goToNextQuestion, isLastQuestion, isMarked, handleSubmit} = useQuiz();
  const router = useRouter();

  const onSubmit = () => {
    handleSubmit();
    router.push(`/quiz/result/${examId}`);
  }

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
        <Button disabled={isLastQuestion} onClick={goToNextQuestion} className='saveAndNext' variant='outlined'>
          <p className="buttonText">Save & Next</p>
        </Button>
      </Box>
      <Box className="container container2 center">
        <Button onClick={onSubmit} className='submit' variant='outlined'>
          <p className="buttonText">Submit</p>
        </Button>
      </Box>

    </Card>
  )
}