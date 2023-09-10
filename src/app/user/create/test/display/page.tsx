"use client"

import { Box, CircularProgress, SxProps } from "@mui/material";
import Header from "./Header";
import TestTable from "./TestTable";
import { useQuery } from "@tanstack/react-query";
import { getAllExamsRequest } from "@/api/exam";
import { IExam } from "@/interfaces/examInterfaces";

const styles:SxProps = {
  backgroundColor: "white",
  margin: "10px",
  minHeight: "90vh",
  padding: "30px",
}

export default function Page() {

  const {data, error, isLoading} = useQuery(["exams"],async () => await getAllExamsRequest());


  if(error || !data?.exams)
    return <Box sx={styles}>error</Box>

  if(isLoading)
    return <Box className="center" sx={styles}><CircularProgress /></Box>

  const exams:IExam[] = data.exams;

  return (
    <Box sx={styles}>
      <Header />
      <Box>
        <TestTable exams={exams} />
      </Box>
    </Box>
  )
}