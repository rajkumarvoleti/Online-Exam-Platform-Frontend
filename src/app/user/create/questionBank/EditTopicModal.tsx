import { useSubject } from "@/hooks/exam/useSubject";
import { useTopic } from "@/hooks/exam/useTopic";
import { ISubject, ITopic } from "@/interfaces/examInterfaces";
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

export default function EditTopicModal({ handleClose, currTopic }: { handleClose: () => void, currTopic: ITopic }) {

  const [topicName, setTopicName] = useState<string>(currTopic.name);
  const { updateTopic } = useTopic();

  const handleChange = (e: any) => {
    setTopicName(e.target.value);
  }

  const handleSubmit = () => {
    if (!currTopic.id)
      return;
    const topic: ITopic = {
      id: currTopic.id,
      name: topicName,
      description: "",
      subjectId: currTopic.subjectId
    };
    updateTopic(topic);
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