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

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  justifyContent: "space-between",
  ".options":{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  ".newButton":{
    flexShrink: "0",
    borderRadius: "6px",
    border: "1.152px solid #C2E830",
    background: "#FFF",
  },
}

export default function Header({topic}:{topic:ITopic}) {

  const router = useRouter();
  const {setQuery, setQuestionNumber} = useManageQuestions();

  const handleNew = () => {
    router.push(`/user/create/questions/${topic.id}`);
  }

  return (
    <Card sx={styles}>
      <h4>Questions for {topic.name}</h4>
      <Box className="options">
        <Button onClick={handleNew} className='newButton' variant='outlined'>
          + New
        </Button>
        <QuestionNumberInput setQuestionNumber={setQuestionNumber} />
        <SearchBarComp width="200px" height="35px" setQuery={setQuery} />
        <FilterMenu />
        {/* <OptionsMenu /> */}
      </Box>
    </Card>  
  )
}