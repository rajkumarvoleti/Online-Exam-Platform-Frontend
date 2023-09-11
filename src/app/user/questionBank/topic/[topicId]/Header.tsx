import { Button, Card, CircularProgress, SxProps } from "@mui/material";
import { Box } from "@mui/material";
import SearchBarComp from "@/components/SearchBarComp";
import { useSearchParams } from "next/navigation";
import QuestionNumberInput from "./QuestionNumberInput";
import FilterMenu from "./FilterMenu";
import useManageQuestions from "./useManageQuestions";
import { useRouter } from "next-nprogress-bar";
import { useQuery } from "@tanstack/react-query";
import { getTopicRequest } from "@/api/topic";
import { useState, useEffect } from "react";
import { ITopic } from "@/interfaces/examInterfaces";
import OptionsMenu from "@/components/OptionsMenu";

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  padding: "10px 10px",
  boxShadow:"none",
  borderRadius:"0",
  justifyContent: "space-between",
  ".options":{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  ".newButton":{
    flexShrink: "0",
    borderRadius: "6px",
    border: "1px solid #A6BED1",
    background: "#FFF",
  },
  ".header":{
    fontSize:"20px",
    fontWeight:"550",
  }
}

export default function Header({topic}:{topic:ITopic}) {

  const router = useRouter();
  const {setQuery, setQuestionNumber} = useManageQuestions();

  const handleNew = () => {
    router.push(`/user/create/questions/${topic.id}`);
  }

  return (
    <Card sx={styles}>
      <span className="header"> {topic.name}</span>
      <Box className="options">
        <Button onClick={handleNew} className='newButton'>
          + Add Question
        </Button>
        <QuestionNumberInput setQuestionNumber={setQuestionNumber} />
        <SearchBarComp className="" onSearch={() => {}} />
        <FilterMenu />
        <OptionsMenu />
      </Box>
    </Card>  
  )
}