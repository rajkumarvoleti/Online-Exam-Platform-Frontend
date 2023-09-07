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
  minHeight: "90vh",
  ".tabs":{
    margin: "20px",
  },
  ".MuiTabs-flexContainer": {
    gap:"50px",
  },
  ".tab":{
    color: "#979797",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24.542px",
  },
  ".active":{
    color: "#2200A5",
  },
  ".cards":{
    display:"flex",
    width:"75vw",
    flexWrap:"wrap",
    justifyContent: "center",
    margin: "20px",
  }
}

export default function Page(){

  const [tabValue, setTabValue] = useState<number>(0);
  const {data, error, isLoading} = useQuery(["exams"],async () => await getAllExamsRequest())

  const tabs = ["Start Now","Completed" ,"Coming Soon"];

  if(error)
    return <Box sx={styles}>error</Box>
  
  if(isLoading)
    return <Box className="center" sx={styles}><CircularProgress /></Box>
  
  if(!data.exams)
    return <></>

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
      <Box className="center">
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