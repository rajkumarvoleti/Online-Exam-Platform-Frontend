import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { Box, Button, Card, Checkbox, IconButton, SxProps } from "@mui/material";
import EditIcon from '@mui/icons-material/EditOutlined';
import { usePathname, useRouter } from "next/navigation";
import useManageQuestions from "./useManageQuestions";

const styles:SxProps = {
  ".card":{
    padding: "10px 20px",
  },
  ".options":{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    ".optionNumber":{
      color: "#000",
    },
    ".correctOption":{
      color: "#b5e48c",
    },
  },
  ".ans":{
    width: "100%",
    borderRadius: "10px",
    padding: "0 20px",
    margin: "0",
  }
}

export default function Question({question}:{question:IQuestionAndAnswer}){

  const router = useRouter();
  const pathName = usePathname();
  const {selectedQuestions, toggleQuestion} = useManageQuestions();

  const handleEditQuestion = () => {
    router.push(`${pathName}/${question.questionId}`);
  }
  
  const handleCheckBox = () => {
    if(!question.questionId)
      return;
    toggleQuestion(question.questionId);
  }

  if(!question.questionId || !question.topicId)
    return <></>;

  return (
    <Box sx={styles}>
      <Box key={question.questionId}>
        <Box className="questionNumber">
          <Checkbox checked={selectedQuestions.includes(question.questionId)} size="small" onClick={handleCheckBox} />
          <h4>Question {question.questionNumber}</h4>
          {selectedQuestions.includes(question.questionId) && <Box className="icons">
            <IconButton onClick={handleEditQuestion} size="small">
              <EditIcon color="primary" />
            </IconButton>
          </Box>}
          <Box className="desc">
            <Button size="small" variant="outlined">{question.complexity}</Button>
            <Button size="small" variant="outlined">{question.answer.type}</Button>
          </Box>
        </Box>
      </Box>
      <Card className="card">
        <Box className="question">
          <p dangerouslySetInnerHTML={{__html:question.question}} />
        </Box>
        <Box className="answer">
          {question.answer.type !== "multipleChoice" && 
          <Box className="options">
            <p className="optionNumber">A{")"}</p>
            <p>{question.answer.description}</p>
          </Box>}
          {question.answer.options.map((opt,i) => (
            <Box className="options" key={opt.description}>
              <p className={opt.isCorrect ? "optionNumber correctOption" : "optionNumber"}>{i+1}{")"}</p>
              <p className="ans" dangerouslySetInnerHTML={{__html:opt.description}} />
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  )
}