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

export default function Page({params}:{params:{examId:string}}) {

  const router = useRouter();
  
  const {ended, started, time} = useRecoilValue(quizAtom);

  const { fullScreen, tabFocus } = useProctoring({
    forceFullScreen: false,
    preventTabSwitch: false,
    preventContextMenu: false,
    preventUserSelection: false,
    preventCopy: false,
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
    return <p>Something went wrong</p>

  if(isLoading)
    return <p>loading...</p>

  if(!examId)
    return <></>

  if (fullScreen.status === 'off') return <>Paused</>
  if (tabFocus.status === false) return <>Paused</>

  return (
    <>
      <Exam exam={data.exam} />
      <Alerts fullScreen={fullScreen} tabFocus={tabFocus} />
    </>
  )
}