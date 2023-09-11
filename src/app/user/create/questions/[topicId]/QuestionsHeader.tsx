import { IQuestionAndAnswer, ITopic } from "@/interfaces/examInterfaces"
import { getCreateQuestionsInitialValues } from "@/utils/formik/initialValues"
import { Box, Button, Card, MenuItem, Select, SelectChangeEvent, SxProps, TextField } from "@mui/material"
import { useFormikContext } from "formik"
import { useRouter } from "next-nprogress-bar"

const styles:SxProps = {
  boxShadow:"none",
  display: "flex",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems: "flex-end",
  padding: "10px 10px",
  gap : "20px",
  position: "sticky",
  top: "0px",
  borderRadius:"5px 5px 0px 0px",
  backgroundColor: "#fff",
  zIndex: 4,

  ".headerRight":{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:"20px"
  },

  ".selectBox":{
    ml: "0",
    ".select":{
      width: "245px",
      height: "34px",
    },
    ".label":{
      color: "#00000099",
    margin:"3px 0px",

    }
  },
  ".navigation":{
    gap: "10px",
   
    mr: "30px",
    ".text":{
      color:"#575757",
      fontSize:"14px"
    },
    ".textField":{
      width: "30px",
    }
  },
  ".addButton":{
    height: "32px",
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
      <div>
        <Box className="selectBox">
        <p className="label">Chapter Name</p>
        <Select onChange={handleRoute} className="select" value={JSON.stringify(topicId)}>
          {topics.map(topic => (
            <MenuItem value={JSON.stringify(topic.id)} key={topic.id}>{topic.name}</MenuItem>
            ))}
        </Select>
        </Box>
      </div>

      <div className="headerRight">

      <Button className="addButton" onClick={handlePush} variant="outlined">+ Add Question</Button>
      <Box className="center navigation">
        <p className="text">Enter Question No: </p>
        <TextField className="textField" variant="standard" />
        <p className="text"> of {values.questions.length}</p>
      </Box>
      </div>
       
  
      {/* <h4 className="heading">{subjectName}</h4> */}
  
      
    </Card>
  )
}