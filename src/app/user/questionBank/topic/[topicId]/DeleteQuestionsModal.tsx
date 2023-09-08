import { Box, Button, SxProps } from "@mui/material";
import {useQuestion} from '@/hooks/exam/useCreateQuestion';
import useManageQuestions from "./useManageQuestions";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { useEffect, useState } from "react";

const styles: SxProps = {
  ".buttons": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  }
}

export default function DeleteQuestionModal({ handleClose, topicId}: { handleClose: () => void, topicId:number }) {

  const { deleteQuestions, loading } = useQuestion();
  const { selectedQuestions, removeAllQuestions } = useManageQuestions();
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if(loading) setCanClose(prev => true);
    else if(!loading && canClose)
      handleClose();
  }, [loading]);

  const handleDelete = async () => {
    console.log(selectedQuestions);
    await deleteQuestions({ids:selectedQuestions,topicId});
  }

  useEffect(() => {
    console.log(loading);
  }, [loading])

  useEffect(() => {
    return () => {
      removeAllQuestions();
    }
  }, [])
  
  

  return (
    <Box sx={styles}>
      <p>Please confirm before deleting the questions</p>
      <Box className="buttons">
        <Box className="buttons">
          <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
          <LoadingButton loading={loading} size="small" variant="contained" color="error" onClick={handleDelete}>Delete</LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}