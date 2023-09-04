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

export default function EditSubjectModal({ handleClose, currSubject }: { handleClose: () => void, currSubject: ISubject }) {

  const [subjectName, setSubjectName] = useState<string>(currSubject.name);
  const { updateSubject, loading } = useSubject();
  const [canClose, setCanClose] = useState(false);

  const handleChange = (e: any) => {
    setSubjectName(e.target.value);
  }

  const handleSubmit = () => {
    if (!currSubject.id)
      return;
    const subject: ISubject = {
      id: currSubject.id,
      name: subjectName,
      description: "",
      topicsCount: 0,
    };
    updateSubject(subject);
  }

  useEffect(() => {
    if(loading) setCanClose(prev => true);
    else if(!loading && canClose) handleClose();
  }, [loading])

  return (
    <Box sx={styles}>
      <Box className="inputBox">
        <InputLabel className="label">Subject Name</InputLabel>
        <OutlinedInput value={subjectName} onChange={handleChange} className="input" />
      </Box>
      <Box className="buttons">
        <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
        <LoadingButton loading={loading} size="small" variant="contained" onClick={handleSubmit}>Submit</LoadingButton>
      </Box>
    </Box>
  )
}