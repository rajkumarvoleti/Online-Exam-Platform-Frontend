"use client"

import { getSubjectRequest } from "@/api/subject";
import { ISubject, ITopic } from "@/interfaces/examInterfaces";
import { Box } from "@mui/material";
import { useQueries } from "@tanstack/react-query";
import Header from "./Header";
import Topics from "./Topics";
import { getAllTopicsRequest } from "@/api/topic";
import { useEffect, useState } from "react";

export default function Page({params}:{params:{subjectId:string}}) {

  const id = parseInt(params.subjectId);
  const results = useQueries({queries: [
    {queryKey: ["subject",id],queryFn: async() =>  await getSubjectRequest(id)},
    {queryKey: ["topics",id],queryFn: async() => await getAllTopicsRequest({subjectId:id})},
  ]});

  const [topics, setTopics] = useState<ITopic[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if(!results[1].data)
      return;
    setTopics(results[1].data.topics);
  }, [results[1].data])

  useEffect(() => {
    if(!results[1].data)
      return;
    const newTopics = results[1].data.topics.filter((topic:ITopic) => {
      return topic.name.toLowerCase().includes(query.toLowerCase());
    })
    setTopics(newTopics);
  }, [query,results[1].data])
  

  if(results[0].error || results[1].error)
    return <p>Something went wrong</p>

  if(results[0].isLoading || results[1].isLoading)
    return <p>loading...</p>

  const subject:ISubject = results[0].data.subject;

  if(!subject.id)
    return <></>

  return (
    <Box>
      <Header setQuery={setQuery} subject={subject} />
      <Topics topics={topics} />
    </Box>
  )
}