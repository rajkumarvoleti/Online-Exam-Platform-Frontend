import { Box, Card, CircularProgress } from '@mui/material';
import SideBarHeader from './SideBarHeader';
import SubjectComponent from './SubjectComponent';
import { ISubject } from '@/interfaces/examInterfaces';
import { useQuery } from '@tanstack/react-query';
import { getAllSubjectsRequest } from '@/api/subject';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';

const styles = {
  width: "280px",
  minHeight: "85vh",
  flexShrink: "0",
  padding: "10px 0",
  position: "sticky",
  top: "0px",
  marginBottom: "auto",
  ".main": {
    mt: "10px",
    ">*": {
      borderTop: "0.5px solid #B3B3B3",
      ":last-child": {
        borderBottom: "0.5px solid #B3B3B3",
      },
    },
    ".heading": {
      textAlign: "center",
      padding: "20px",
    },
    h5: {
      color: "#454545",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "24.542px",
      margin: 0,
    },
    h6: {
      color: "rgba(0, 0, 0, 0.60)",
      fontSize: "16px",
      lineHeight: "24.542px",
      margin: 0,
    }
  }
}

export default function SideBar() {

  const { data, isLoading, error } = useQuery(["subjects"], getAllSubjectsRequest);
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if(!data)
      return;
    setSubjects(data.subjects);
  }, [data])

  useEffect(() => {
    console.log(pathName);
    if(pathName === "/user/questionBank" && subjects[0]){
      const id = subjects[0].id;
      router.push(`/user/questionBank/subject/${id}`);
    }
  }, [pathName,subjects])
  

  useEffect(() => {
    if(!data || !data.subjects)
      return;
    const newSubjects = data.subjects.filter((subject:ISubject) => {
      return subject.name.toLowerCase().includes(query.toLowerCase());
    })
    setSubjects(newSubjects);
  }, [query, data])
  
  if(error)
    return <Card className='center' sx={styles}>Something went wrong</Card>

  if (isLoading)
    return <Card className='center' sx={styles}><CircularProgress /></Card>;

  return (
    <Card sx={styles}>
      <SideBarHeader setQuery={setQuery} />
      <Box className="main">
        <h5 className='heading'>All Subjects</h5>
        {subjects && subjects.length === 0 && <p>No subjects to show</p>}
        {subjects && subjects.map((subject: ISubject, i: number) => (
          <SubjectComponent key={i} subject={subject} />
        ))}
      </Box>
    </Card>
  )
}