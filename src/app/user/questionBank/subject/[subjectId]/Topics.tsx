import { ITopic } from "@/interfaces/examInterfaces";
import { Box, Card, SxProps } from "@mui/material";
import Topic from "./Topic";

const styles:SxProps = {
borderRadius:"0px",
// height: "545px",

  // minHeight: "80vh",
  display: "flex",
  flexDirection:"row",
    justifyContent: "flex start !important",
    flexWrap: "wrap",
  gap: "20px",
  alignItems: "flex-start",
  padding: "20px",
  boxShadow:"none",
  ".topicCard": {
    ".details":{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      cursor:"pointer",
    },
    display: "flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    width: "219px",
    height: "78px",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.20)",
    boxShadow:"0 0  0.5px 0.5px rgba(0,0,0,10%)",
    padding: " 3px 10px",
    // mb:"30px",
    h5:{
      fontSize: "16px",
      fontWeight: "500",
      margin: 0,
    },
    ".questionCount": {
      fontSize: "15px",
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