"use client"
import {Box, Card, SxProps, Tab, Tabs} from '@mui/material';
import Header from './Header';
import {useState} from 'react';
import ExamCard from './ExamCard';
import CompletedExamCard from './CompletedExamCard';
import { useQuery } from '@tanstack/react-query';
import { getAllExamsRequest } from '@/api/exam';
import { IExam } from '@/interfaces/examInterfaces';

const styles:SxProps = {
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

  const tabs = ["Start Now","Completed" ,"Coming Soon"]

  if(error)
    return <p>error</p>
  
  if(isLoading)
    return <p>loading...</p>
  
  console.log(data);

  return (
    <Box sx={styles}>
      <Header/>
      <Card>
        <Tabs className='tabs' value={tabValue}>
            {tabs.map((tab,i) => 
                (<Tab className={i === tabValue ?"tab active" : "tab"} key={i} onClick={() => setTabValue(i)} label={tab} />)
              )}
        </Tabs>
      </Card>
      <Box className="center">
        {tabValue === 0 && <Box className="cards">
          {data.exams.map((exam:IExam) => (
            <ExamCard exam={exam} key={exam.id}/>
          ))}
        </Box>}
        {tabValue === 1 && <Box className="cards">
          <CompletedExamCard />
          {/* <CompletedExamCard />
          <CompletedExamCard />
          <CompletedExamCard /> */}
        </Box>}
        {tabValue === 2 && <Box className="cards">
          {/* <ExamCard/>
          <ExamCard/>
          <ExamCard/>
          <ExamCard/> */}
        </Box>}
      </Box>
    </Box>
  )
}