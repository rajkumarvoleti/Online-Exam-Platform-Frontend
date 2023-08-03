"use client"

import { Box } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import Questions from "./Questions";

export interface IOption {
  _id: string
  text: string;
  images?: string[];
}

export interface IQuestion {
  _id: string
  text: string;
  type: 'simple' | 'medium' | 'hard';
  options: IOption[];
  images?: string[];
}

export default function Page() {

  const [questions, setQuestions] = useState<[IQuestion] | []>([]);

  const sendAxiosRequest = async (numberOfQuestions:number) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/questionbank/getQuestions`,{
      method: 'GET',
      params: {number:numberOfQuestions}
    });

    return res;
  } 

  useEffect(() => {
    const fetchData = async () => {
      const res = await sendAxiosRequest(10);
      const data:[IQuestion] = res.data.map((q:any) => {
        const newQuestion:IQuestion = {
          _id: q._id,
          options: q.options,
          text: q.text,
          type: q.type,
          images: q.images
        }
        return newQuestion;
      })
      setQuestions(data);
    }

    fetchData();

  }, [])
  

  return (
    <Box>
      <Questions questions={questions}/>
    </Box>
  )
}