import { Box, Button, RadioGroup, FormControlLabel, Radio, SxProps } from "@mui/material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import { useQuiz } from "@/hooks/useQuiz";
import { useEffect } from "react";
import MCQAnswer from "./MCQAnswer";
import SubjectiveAnswer from "./SubjectiveAnswer";

const styles: SxProps = {
  padding: "30px 50px",
  width: "80%",
  ".container1":{
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    ".questionNumber":{
      color: "#414141",
      fontSize: "18px",
      fontWeight: "400",
      "span":{
        color:"#ACACAC",
      },
    },
  },
  ".reportButton":{
    ".icon":{
      color: "gray",
      margin: "0 10px"
    },
    ".buttonText":{
      textTransform: "initial",
      fontSize: "16px"
    }
  },
  ".container2":{
    margin: "30px 0",
    ".label":{
      borderRadius: "6px",
      border: "0.5px solid #B6B6B6",
      height: "50px",
      flexShrink: "0",
    },
    ".label.active":{
      color: "#2200A5",
      border: "0.5px solid #2200A5",
    }
  },
}

export default function Question() {

  const {numberOfQuestions, activeQuestion, visitQuestion} = useQuiz();

  useEffect(() => {
    visitQuestion();
  }, [activeQuestion?.id])



  if(!activeQuestion)
    return <></>;

  return (
    <Box sx={styles}>
      <Box className="container1">
        <p className="questionNumber">Question {activeQuestion?.id}<span>/{numberOfQuestions}</span></p>
        <Button className="reportButton center">
          <ReportProblemOutlinedIcon className="icon" />
          <p className="buttonText">Report</p>
        </Button>
      </Box>
      <Box className="container2">
        <h3 className="question">{activeQuestion.question}</h3>
        <RadioGroup>
          {activeQuestion.type === "multipleChoice" && <MCQAnswer options={activeQuestion.options} />}
          {activeQuestion.type === "trueOrFalse" && <MCQAnswer options={['True', 'False']} />}
          {activeQuestion.type === "fillInTheBlanks" && <SubjectiveAnswer />}
          {activeQuestion.type === "subjective" && <SubjectiveAnswer />}
          {/* <SubjectiveAnswer /> */}
        </RadioGroup>
      </Box>
    </Box>
  )
}