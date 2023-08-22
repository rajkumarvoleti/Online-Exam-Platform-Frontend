import { useTopic } from "@/hooks/exam/useTopic";
import { ITopic } from "@/interfaces/examInterfaces";
import { Box, SxProps, InputLabel, OutlinedInput, Button } from "@mui/material";
import { useState } from "react";

const styles: SxProps = {
  width: "300px",
  ">*": {
    margin: "20px 0",
  },
  "label": {
    fontSize: "18px",
    color: "#051390",
    fontWeight: "500",
  },
  ".buttons": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  }
}

export default function CreateTopicModal({ handleClose, subjectId }: { handleClose: () => void, subjectId: number }) {

  const [topicName, setTopicName] = useState<string>("");
  const { createTopic } = useTopic();

  const handleChange = (e: any) => {
    setTopicName(e.target.value);
  }

  const handleSubmit = () => {
    console.log(topicName);
    const topic: ITopic = {
      name: topicName,
      description: "",
      subjectId: subjectId,
      questionsCount: 0,
    };
    createTopic(topic);
    handleClose();
  }

  return (
    <Box sx={styles}>
      <Box className="inputBox">
        <InputLabel className="label">Topic Name</InputLabel>
        <OutlinedInput onChange={handleChange} className="input" />
      </Box>
      <Box className="buttons">
        <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
        <Button size="small" variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  )
}