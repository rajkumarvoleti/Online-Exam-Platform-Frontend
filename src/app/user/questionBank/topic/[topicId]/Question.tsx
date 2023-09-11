import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { Box, Button, Card, Checkbox, IconButton, SxProps } from "@mui/material";
import EditIcon from '@mui/icons-material/EditOutlined';
import { usePathname } from "next/navigation";
import useManageQuestions from "./useManageQuestions";
import { useRouter } from "next-nprogress-bar";


const styles:SxProps = {
padding:"0px 1px 10px 2px",
margin:"0"  ,
// border:"1px solid",
  ".question > p":{
    margin:"0",
    padding:"0"
  },
  ".question":{
    margin:"4px 1px",
  },
  ".questionBlock":{
    backgroundColor:"#F4F5F9",
    
  },
  ".labelHeader":{
    fontSize:"16px",
    color:"#575757"
  },
  ".questionType":{
    fontWeight:"500",
    fontSize:"15px",
marginLeft:"3px",

  },
  ".desc":{
paddingRight:"20px",
textTransform:"capitalize",


  },
  
    ".card":{
    padding: "5px 11px",
    // border:"1px solid ",
    border:"1px solid #e7e1e1",
    borderRadius:"0px 0px 5px 5px",
    boxShadow:"none",
    ".MuiBox-root ":{
      padding:"7px 0px",
      margin:"0"
    },
  },
  ".options":{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    ".optionNumber":{
      color: "#000",
      padding:"0",
      margin:"0",
    },
    ".correctOption":{
      color: "#b5e48c",
    },
  },
  ".ans":{
    width: "100%",
    borderRadius: "10px",
    padding: "0 10px",
    margin: "0",

  },

  ".ans>p":{
    padding:"0",
    margin:"0"
  },
  ".headerQuestion":{
    fontSize:"18px",
    color:"#575757",
    fontWeight:"550",
  },
 
}

export default function Question({question}:{question:IQuestionAndAnswer}){

  const router = useRouter();
  const pathName = usePathname();
  const {selectedQuestions, toggleQuestion} = useManageQuestions();

  const handleEditQuestion = () => {
    router.push(`/user/edit/question/${question.questionId}`);
  }
  
  const handleCheckBox = () => {
    if(!question.questionId)
      return;
    toggleQuestion(question.questionId);
  }

  if(!question.questionId || !question.topicId)
    return <></>;

  return (
    <Box sx={styles} >
      <Box className="questionBlock" key={question.questionId}>
        <Box className="questionNumber">
          <Checkbox checked={selectedQuestions.includes(question.questionId)} size="small" onClick={handleCheckBox} />
          <span className="headerQuestion">Question {question.questionNumber}</span>
          {selectedQuestions.includes(question.questionId) && <Box className="icons">
            <IconButton onClick={handleEditQuestion} size="small">
              <EditIcon color="primary" />
            </IconButton>
          </Box>}
          <Box className="desc">
            <div>
              <span  className="labelHeader">Level :</span>
              <span  className="questionType">{question.complexity}</span>
            </div>
            <div>
              <span className="labelHeader">Type :</span>
              <span className="questionType">{question.answer.type}</span>
            </div>

            {/* <Button size="small">{question.complexity}</Button>
            <Button size="small">{question.answer.type}</Button> */}
          </Box>
        </Box>
      </Box>
      
      <Card className="card">
        <Box >
          <p className="question" dangerouslySetInnerHTML={{__html:question.question}} />
        </Box>
        <Box className="answer">
          {question.answer.type !== "multipleChoice" && 
          <Box className="options">
            <p className="optionNumber">A{")"}</p>
            <p>{question.answer.description}</p>
          </Box>}
          {question.answer.type === "multipleChoice" && question.answer.options.map((opt,i) => (
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