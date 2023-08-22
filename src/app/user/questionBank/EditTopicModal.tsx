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

export default function EditTopicModal({ handleClose, topic }: { handleClose: () => void, topic: ITopic }) {

  const [topicName, setTopicName] = useState<string>(topic.name);
  const { updateTopic } = useTopic();

  const handleChange = (e: any) => {
    setTopicName(e.target.value);
  }

  const handleSubmit = () => {
    if (!topic.id)
      return;
    const newTopic: ITopic = {
      id: topic.id,
      name: topicName,
      description: "",
      subjectId: topic.subjectId,
      questionsCount: 0,
    };
    updateTopic(newTopic);
    handleClose();
  }

  return (
    <Box sx={styles}>
      <Box className="inputBox">
        <InputLabel className="label">Topic Name</InputLabel>
        <OutlinedInput value={topicName} onChange={handleChange} className="input" />
      </Box>
      <Box className="buttons">
        <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
        <Button size="small" variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  )
}