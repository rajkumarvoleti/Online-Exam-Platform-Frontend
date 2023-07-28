"use client";

import MediaAccess from "@/components/MediaAccess";
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";

const styles = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ".time":{
    width:"300px",
    display:"flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button:{
    mt: "30px",
  }
}

export default function Home() {
  const [time, setTime] = useState<number>(200);
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();

  const handleTime = (e:any) => {setTime(e.target.value)}; 

  const startExam = () => {
    router.push(`/exam?time=${time}`);
  }

  return (
    <Box sx={styles}>
      <h1>Start Exam</h1>
      <Box className="time">
        <h2>Select Time</h2>
        <FormControl sx={{width:"100px"}}>
          <Select onChange={handleTime} value={time} size="medium">
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <MediaAccess setDisabled={setDisabled} />
      <Button onClick={startExam} disabled={disabled} size="large" variant="contained">
        Start
      </Button>
    </Box>
  );
}