"use client"

import { useProctoring } from '@/hooks/proctoring/useProctoring'
import { useEffect, useState } from 'react'
import Exam from './Exam'
import Alerts from './Alerts'
import WebCamComponent from '@/components/WebCam'
import { useQuery } from '@tanstack/react-query'
import { getExamRequest } from '@/api/exam'
import { useRouter } from 'next/navigation'
import { quizAtom, useQuiz } from '@/hooks/useQuiz'
import { useRecoilValue } from 'recoil'
import { CircularProgress, SxProps } from '@mui/material'
import { Box } from '@mui/system'

const styles:SxProps = {
  minWidth: "100vw",
  minHeight: "100vh",
}

export default function Page({params}:{params:{examId:string}}) {

  const router = useRouter();
  
  const {ended, started, time} = useRecoilValue(quizAtom);

  const { fullScreen, tabFocus } = useProctoring({
    forceFullScreen: true,
    preventTabSwitch: true,
    preventContextMenu: true,
    preventUserSelection: true,
    preventCopy: true,
  })
  
  const examId = parseInt(params.examId);
  const {data, error, isLoading} = useQuery(["exam",examId],async () => await getExamRequest(examId));

  useEffect(() => {
    console.log({started, ended});
    if (!started) 
      router.push(`/quiz/intro/${examId}`);
    if(ended) 
      router.push(`/quiz/result/${examId}`);
  }, [started, ended])

  if (!started || ended)
    return <></>
  
  if(error)
    return <Box className='center' sx={styles}>Something went wrong</Box>

  if(isLoading)
    return <Box className='center' sx={styles}><CircularProgress /></Box>

  if(!examId)
    return <></>

    const getContent = () => {
      if (fullScreen.status === 'off') return < >Paused</>
      if (tabFocus.status === false) return < >Paused</>
  
      return <Exam exam={data.exam} />
    }
  
    return (
      <>
        {/* For debugging purpose */}
        {/* <pre>{JSON.stringify({ fullScreen, tabFocus }, null, 2)}</pre> */}
  
        <div className="test-container">{getContent()}</div>
        <Alerts fullScreen={fullScreen} tabFocus={tabFocus} />
      </>
    )
  
}