import { Box, Button, SxProps } from "@mui/material";
import {useQuestion} from '@/hooks/exam/useCreateQuestion';
import useManageQuestions from "./useManageQuestions";

const styles: SxProps = {
  ".buttons": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  }
}

export default function DeleteQuestionModal({ handleClose, topicId}: { handleClose: () => void, topicId:number }) {

  const { deleteQuestions } = useQuestion();
  const { selectedQuestions } = useManageQuestions();

  const handleDelete = async () => {
    console.log(selectedQuestions);
    await deleteQuestions({ids:selectedQuestions,topicId});
    handleClose();
  }

  return (
    <Box sx={styles}>
      <p>Please confirm before deleting the questions</p>
      <Box className="buttons">
        <Box className="buttons">
          <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
          <Button size="small" variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </Box>
      </Box>
    </Box>
  )
}