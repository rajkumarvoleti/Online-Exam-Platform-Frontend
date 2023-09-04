import { useSubject } from "@/hooks/exam/useSubject";
import { ISubject } from "@/interfaces/examInterfaces";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { Box, SxProps, InputLabel, OutlinedInput, Button } from "@mui/material";
import { useEffect, useState } from "react";

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

export default function CreateSubjectModal({ handleClose }: { handleClose: () => void }) {

  const [subjectName, setSubjectName] = useState<string>("");
  const { createSubject, loading } = useSubject();
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if(loading) setCanClose(prev => true);
    else if(!loading && canClose) handleClose();
  }, [loading])

  const handleChange = (e: any) => {
    setSubjectName(e.target.value);
  }

  const handleSubmit = () => {
    console.log(subjectName);
    const subject: ISubject = {
      name: subjectName,
      description: "",
      topicsCount: 0,
    };
    createSubject(subject);
  }

  return (
    <Box sx={styles}>
      <Box className="inputBox">
        <InputLabel className="label">Subject Name</InputLabel>
        <OutlinedInput onChange={handleChange} className="input" />
      </Box>
      <Box className="buttons">
        <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
        <LoadingButton loading={loading} size="small" variant="contained" onClick={handleSubmit}>Submit</LoadingButton >
      </Box>
    </Box>
  )
}