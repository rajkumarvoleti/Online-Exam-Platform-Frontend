"use client"

import { useProctoring } from '@/hooks/proctoring/useProctoring'
import { useState } from 'react'
import ExamIntro from '../ExamInto'
import ExamPaused from '../ExamPaused'
import Exam from '../Exam'
import Alerts from '../Alerts'
import WebCamComponent from '@/components/WebCam'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getExamRequest } from '@/api/exam'

export default function Page({params}:{params:{examId:string}}) {
  
  const [examHasStarted, setExamHasStarted] = useState(false);
  const { fullScreen, tabFocus } = useProctoring({
    forceFullScreen: false,
    preventTabSwitch: false,
    preventContextMenu: false,
    preventUserSelection: false,
    preventCopy: false,
  })
  
  const examId = parseInt(params.examId);
  const {data, error, isLoading} = useQuery(["exam",examId],async () => await getExamRequest(examId));

  if(error)
  return <p>Something went wrong</p>

  if(isLoading)
  return <p>loading...</p>

  if (!examHasStarted) {
    return (
      <ExamIntro
        onClick={() => {
          fullScreen.trigger()
          // Wait before react finishes updating state. flushSync doesn't seem to work
          setTimeout(() => {
            setExamHasStarted(true)
          }, 100)
        }}
      />
    )
  }

  if(!examId)
    return <></>

  const getContent = () => {
    if (fullScreen.status === 'off') return <ExamPaused />
    if (tabFocus.status === false) return <ExamPaused />

    return <Exam exam={data.exam} />
  }

  return (
    <>
      {/* For debugging purpose */}
      {/* <pre>{JSON.stringify({ fullScreen, tabFocus }, null, 2)}</pre> */}

      <div className="test-container">{getContent()}</div>
      {/* <WebCamComponent /> */}
      <Alerts fullScreen={fullScreen} tabFocus={tabFocus} />
    </>
  )
}