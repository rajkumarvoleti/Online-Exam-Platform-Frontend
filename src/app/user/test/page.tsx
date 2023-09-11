"use client"
import {Box, Card, CircularProgress, SxProps, Tab, Tabs} from '@mui/material';
import Header from './Header';
import {useState} from 'react';
import ExamCard from './ExamCard';
import CompletedExamCard from './CompletedExamCard';
import { useQuery } from '@tanstack/react-query';
import { getAllExamsRequest } from '@/api/exam';
import { IExam } from '@/interfaces/examInterfaces';
import dayjs from 'dayjs';

const styles:SxProps = {
  backgroundColor:"#ffff",
  ".MuiPaper-root ":{
    padding:"10px 10px 0 10px",
    borderRadius:"8px",
    boxShadow:"none",
  },
  ".tabs":{
    margin: "-9px 0px 10px -4px",
    fontSize:"10px"
  },
  ".MuiTabs-flexContainer": {
    gap:"50px",

  },
  ".tab":{
    color: "#979797",
    fontSize: "15px",
    fontWeight: "500",
    textTransform:"capitalize",
    lineHeight: "24.542px",
    
    padding:"0"
  },
  ".active":{
    color: "#2200A5",
  },
  ".cards":{
    display:"flex",
    flexDirection:"row",
    // width:"75vw",
    flexWrap:"wrap",
    // justifyContent: "center",
    margin: "5px",
    padding:"0"
  },
  ".tests":{
    boxShadow:"0px 0px 0.5px 0.5px rgba(0,0,0,11%) ",
  }
}

export default function Page(){

  const [tabValue, setTabValue] = useState<number>(0);
  const {data, error, isLoading} = useQuery(["exams"],async () => await getAllExamsRequest());

  const tabs = ["Start Now","Completed" ,"Coming Soon"];

  if(error || !data?.exams)
    return <Box sx={styles}>error</Box>
  
  if(isLoading)
    return <Box className="center" sx={styles}><CircularProgress /></Box>

  const isLive = ({start, end}:{start:string,end:string}) => {
    if(start === "always")
      return true;
    return dayjs(start).isBefore(dayjs()) && dayjs(end).isAfter(dayjs());
  }

  const isUpcoming = (start:string)  => {
    return dayjs(start).isAfter(dayjs());
  }

  const isCompleted = (end:string) => {
    return dayjs(end).isBefore(dayjs());
  }

  const liveExams:IExam[] = data.exams.filter((exam:IExam) => isLive({start:exam.testStartDate, end: exam.testEndDate})) || [];
  const upcomingExams:IExam[] = data.exams.filter((exam:IExam) => isUpcoming(exam.testStartDate)) || [];
  const completedExams:IExam[] = data.exams.filter((exam:IExam) => isCompleted(exam.testEndDate)) || [];

  console.log(data);

  return (
    <Box sx={styles}>
      <Header totalExams={data.exams.length}/>
      <Card>
        <Tabs className='tabs' value={tabValue}>
            {tabs.map((tab,i) => 
                (<Tab className={i === tabValue ?"tab active" : "tab"} key={i} onClick={() => setTabValue(i)} label={tab} />)
              )}
        </Tabs>
      </Card>
      <Box className="tests">
        {tabValue === 0 && <Box className="cards">
          {liveExams.map((exam:IExam) => (
            <ExamCard exam={exam} key={exam.id}/>
          ))}
        </Box>}
        {tabValue === 1 && <Box className="cards">
          {completedExams.map((exam:IExam) => (
            <ExamCard exam={exam} key={exam.id}/>
          ))}
        </Box>}
        {tabValue === 2 && <Box className="cards">
          {upcomingExams.map((exam:IExam) => (
            <ExamCard exam={exam} key={exam.id}/>
          ))}
        </Box>}
      </Box>
    </Box>
  )
}