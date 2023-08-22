import { Button, Card, SxProps } from "@mui/material";
import { Box } from "@mui/material";
import SearchBarComp from "@/components/SearchBarComp";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import QuestionNumberInput from "./QuestionNumberInput";
import FilterMenu from "./FilterMenu";
import useManageQuestions from "./useManageQuestions";

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

export default function Header({topicId}:{topicId:number}) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const topicName = searchParams.get("topicName");
  const {setQuestionNumber, setQuery} = useManageQuestions();

  const handleNew = () => {
    const url = pathName.slice(0, pathName.lastIndexOf("/"));
    router.push(`${url}/add/${topicId}?topicName=${topicName}`);
  }

  return (
    <Card sx={styles}>
      <h4>Questions for {topicName}</h4>
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