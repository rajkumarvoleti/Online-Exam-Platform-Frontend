"use client"

import { useQuiz } from "@/hooks/useQuiz";
import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const {resetExam} = useQuiz();

  useEffect(() => {
    return () => {
      resetExam();
    }
  }, [])  

  return (
    <>
      {children}
    </>
  )
}