"use client"

import { IQuestionType } from "@/interfaces/questionInterfaces";
import { Box, Card, CircularProgress, SxProps } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./Header";
import WordComponent from "@/components/WordComponent";
import AnswerComponent from "./AnswerComponent";
import useManageQuestion from "@/hooks/exam/useManageQuestion";
import Footer from "./Footer";
import { useQuery } from "@tanstack/react-query";
import { getTopicRequest, getTopicsFromTopicIdRequest } from "@/api/topic";
import { FieldArray, Form, Formik } from "formik";
import { getCreateQuestionsInitialValues } from "@/utils/formik/initialValues";
import { createQuestionsValidationScehma } from "@/utils/validationScehma";
import { IQuestionAndAnswer, ISubject, ITopic } from "@/interfaces/examInterfaces";
import QuestionsHeader from "./QuestionsHeader";
import Question from "./Question";
import { useQuestion } from "@/hooks/exam/useCreateQuestion";

const styles:SxProps = {
  minHeight: "90vh",
  width: "100%",
  m: "10px",
  ".main":{
    overflow: "unset",
  },
  ".questions":{
    m: "10px 0",
  }
}

export default function Page({params}:{params:{topicId:string}}) {

  const topicId = parseInt(params.topicId,10);
  const {data, isLoading, error} = useQuery(["topicFromTopic",topicId],async() => await getTopicsFromTopicIdRequest(topicId));
  const {createQuestions} = useQuestion();

  if(error)
    return <Box className="center" sx={styles}>Something went wrong</Box>
  
  if(isLoading)
    return <Box className="center" sx={styles}><CircularProgress /></Box>

  const topics:ITopic[] = data.topics;
  const subject:ISubject = data.subject;

  console.log({topics, subject});

  return (
    <Box sx={styles}>
    <Formik
      initialValues={getCreateQuestionsInitialValues(topicId)}
      validationSchema={createQuestionsValidationScehma}
      onSubmit={async(values) => { await createQuestions(values.questions)}}
    >
        {({values}) => (
          <Form>
            <FieldArray name="">
              {() => (
                <Box className="main">
                  <QuestionsHeader subjectName={subject.name} topicId={topicId} topics={topics} />
                  <Card className="questions">
                    {values.questions.map((question,index) => (
                      <Question key={index} index={index} />
                    ))}
                  </Card>
                  <Footer topicId={topicId} />
                </Box>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
