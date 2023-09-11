import { Box, Button, Card, Chip, Divider, SxProps } from "@mui/material";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LanguageIcon from "@/components/icons/LanguageIcon";
import { IExam } from "@/interfaces/examInterfaces";
import { useQuiz } from "@/hooks/useQuiz";
import dayjs from "dayjs";
import { useRouter } from "next-nprogress-bar";

const styles:SxProps = {
  margin: "5px",
  // padding:"10px 10px 0 10px",

  border:"1px solid rgba(0,0,0,10%)",
  // boxShadow:"0 0 5px 5px ",
  display:"flex",
  flexDirection:"column",
  flexWrap:"wrap",
  justifyContent:"flex-start",
  alignItems:"flex-start",
  width: "317px",

".headerdis":{
  color: "#575757",

},
  ".blue":{
    color: "#2200a5",
    fontSize: "14px",
    fontWeight: "500",
    margin:"0",
    // lineHeight: "24.542px",
  },
  ".icon":{
    color: "gray",
  },
  ".title":{
    display:"flex",
    // flexDirection:"column",
    alignItems:"center",
    gap: "10px",
    height: "35px",
    ".heading":{
      color:"#000",
      fontSize: "17px",
      fontWeight: "600",
      lineHeight:"24.542px",
    },
  },
  ".container":{
    display:"flex",

  },
  ".buttonBox":{
    display:"flex",
    alignItems: "end",
    "button":{
      width: "100px",
      height: "35px",
      borderRadius: "6px",
      border: "1px solid #C2E830",
      ".buttonText":{
        fontSize: "12px",
      color: "#2200A5",
      }
    }
  },
  " .time":{
    display: "flex",
    alignItems: "center",
    gap:"8px",
    fontSize:"12px",
  },

  ".languages":{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    gap:"5px",
    fontSize:"12px",
    width:"300px",
    mb:"10px",
  },
".description":{
  display: "flex",
    alignItems: "center",
    gap:"5px",
    fontSize:"12px",
    padding:"0",
    margin:"3px 0 0 0",
  },
  ".divider":{
    height: "20px",
  },
  ".freeExam":{
   color:"#23C552",
   border: "1px solid #C2E830",
   borderRadius:"4px",
   padding:"1px 10px",
   fontSize:"12px",
 
  },
  ".numberwithText":{
    margin:"0",
    fontSize:"15px",
    width:"91px",
  },
  ".timeDate":{
    fontSize:"15px",
  },
  ".iconLanguage":{
    display:"flex",
    flexDirection:"row",
    alignItems:"center", 
    fontSize:"15px",
    gap:"7px"
  },
  " .buttonBox button":{
    width: "76px",
    height: "28px",
    borderRadius: "5px",
    border:" 1px solid #C2E830",
    textTransform:"capitalize"
  }

}

export default function ExamCard({exam}:{exam:IExam}) {

  const router = useRouter();
  const {resetExam} = useQuiz();

  const startExam = () => {
    resetExam();
    router.push(`/quiz/intro/${exam.id}`);
  }

  return (
    <Card sx={styles}>
      {/* <Chip className="chip" label="Free"  color="success"/> */}
      <div className="freeExam">Free</div>
      <Box className="title">
        <p className="heading">{exam.name} :</p>
        <p className="headerdis">{exam.description}</p>
      </Box>
      <Box className="container">
        <Box className="details">
          <Box className="description">
            <DescriptionOutlinedIcon className="icon" />
            <p className="numberwithText">{exam.totalQuestions} Questions</p>
            <Divider className="divider" orientation="vertical" />
            <p className="numberwithText">{exam.testDuration} Minutes</p>
            <Divider className="divider" orientation="vertical" />
            <p className="numberwithText">{exam.totalMarks} marks</p>
          </Box>
          <Box className="time">
            <AccessTimeOutlinedIcon className="icon" />
            {exam.testStartDate === "always" ?
            <p className="timeDate">Always</p>:
            <p className="timeDate">{dayjs(exam.testStartDate).format('DD-MM-YY')} to {dayjs(exam.testEndDate).format('DD-MM-YY')}</p>}
          </Box>
        </Box>
      
      </Box>
      <Box className="languages">
             <div className="iconLanguage">
                <LanguageIcon />
                <p className="blue">English</p>
                <p className="blue">Hindi</p>
             </div>

             <div className="buttonBox">
             <Button onClick={startExam} >
            <p className="buttonText">Start Now</p>
          </Button>
             </div>
      </Box>
    </Card>
  )
}