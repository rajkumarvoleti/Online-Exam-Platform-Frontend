import { IQuestionAndAnswer, ITopic } from "@/interfaces/examInterfaces"
import { getCreateQuestionsInitialValues } from "@/utils/formik/initialValues"
import { Box, Button, Card, MenuItem, Select, SelectChangeEvent, SxProps, TextField } from "@mui/material"
import { useFormikContext } from "formik"
import { useRouter } from "next-nprogress-bar"

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  gap : "20px",
  position: "sticky",
  top: "0px",
  backgroundColor: "#fff",
  zIndex: 4,
  ".selectBox":{
    ml: "auto",
    ".select":{
      width: "228px",
      height: "42px",
    },
    ".label":{
      color: "#00000099",
    }
  },
  ".navigation":{
    gap: "10px",
    mt: "25px",
    mr: "30px",
    ".text":{
      color: "black",
    },
    ".textField":{
      width: "30px",
    }
  },
  ".addButton":{
    height: "42px",
    mt: "25px",
    borderColor: "#B9B9B9",
    color: "black",
  }
}

export default function QuestionsHeader({subjectName, topics, topicId}:{subjectName:string, topics:ITopic[], topicId:number}) {

  const {values, setFieldValue} = useFormikContext<{questions:IQuestionAndAnswer[]}>(); 
  const router = useRouter();

  const handleRoute = (e:SelectChangeEvent) => {
    router.push(`/user/create/questions/${e.target.value}`)
  }

  const handlePush = async() => {
    const createQuestionsInitialValues = getCreateQuestionsInitialValues(topicId);
    const newQuestion = {...createQuestionsInitialValues.questions[0], questionId:Math.random()};
    await setFieldValue("questions",[...values.questions,newQuestion]);
  }

  return (
    <Card sx={styles}>
      <h4 className="heading">{subjectName}</h4>
      <Box className="selectBox">
        <p className="label">Chapter Name</p>
        <Select onChange={handleRoute} className="select" value={JSON.stringify(topicId)}>
          {topics.map(topic => (
            <MenuItem value={JSON.stringify(topic.id)} key={topic.id}>{topic.name}</MenuItem>
            ))}
        </Select>
      </Box>
      <Button className="addButton" onClick={handlePush} variant="outlined">+ Add Question</Button>
      <Box className="center navigation">
        <p className="text">Enter Question No: </p>
        <TextField className="textField" variant="standard" />
        <p className="text"> of {values.questions.length}</p>
      </Box>
    </Card>
  )
}