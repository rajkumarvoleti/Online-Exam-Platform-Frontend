import { ITopic } from "@/interfaces/examInterfaces";
import { Box, Card, SxProps } from "@mui/material";
import Topic from "./Topic";

const styles:SxProps = {
  m: "10px 0",
  minHeight: "74vh",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  alignItems: "flex-start",
  padding: "20px",
  ".topicCard": {
    ".details":{
      cursor:"pointer",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "275px",
    height: "120px",
    borderRadius: "15px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    padding: "10px 20px",
    h5:{
      fontSize: "18px",
      fontWeight: "500",
      margin: 0,
    },
    ".questionCount": {
      fontSize: "16px",
      lineHeight: "0",
      letterSpacing: "0px",
    }
  }
} 

export default function Topics({topics}:{topics:ITopic[]}) {

  return (
    <Card sx={styles}>
      {topics.length === 0 && <p>No Chapters to display</p>}
      {topics.map((topic:ITopic, i: number) => (
        <Topic topic={topic} key={i} />
      ))}
    </Card>
  )
}