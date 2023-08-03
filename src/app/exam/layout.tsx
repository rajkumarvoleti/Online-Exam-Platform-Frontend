"use client"

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap:"30px"
}

import { useTimer } from "@/hooks/useTimer";
import { ITime, getSeconds, getTimeFromSeconds, getTwoDigit } from "@/utils/timeUtils";
import { Box, Button } from "@mui/material";
import { useRouter, useSearchParams } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import AlertDialog from "./ExitExam";
import Time from "@/components/Time";
import BatteryStatus from "@/components/Battery";

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTimeString:string = searchParams.get("time") || "0";
  const initialTime:ITime = getTimeFromSeconds(parseInt(initialTimeString));
  const examTime = useTimer(initialTime);

  useEffect(() => {
    document.documentElement.requestFullscreen();
    return () => {
      if(document.fullscreenElement)
        document.exitFullscreen();
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      if (event.keyCode === 27) {
        event.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyPress, false);
    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    }
  }, [])
  

  useEffect(() => {
    if(getSeconds(examTime) === 0)
      router.push("/");
  }, [examTime])
  
  return (
    <>
      {getSeconds(examTime) > 0 &&
      <Box sx={styles}>
        <h1>{getTwoDigit(examTime.hours)}:</h1>
        <h1>{getTwoDigit(examTime.minutes)}:</h1>
        <h1>{getTwoDigit(examTime.seconds)}</h1>
        <AlertDialog />
        <BatteryStatus/>
        <Time />
      </Box>}
      {children}
    </>
  )
}
