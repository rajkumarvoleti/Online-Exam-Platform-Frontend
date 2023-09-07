import { useTopic } from "@/hooks/exam/useTopic";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import { Box, Button, SxProps } from "@mui/material";
import { useEffect, useState } from "react";

const styles: SxProps = {
  ".buttons": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  }
}

export default function DeleteTopicModal({ handleClose, id }: { handleClose: () => void, id: number }) {

  const { deleteTopic,loading } = useTopic();
  const [canClose, setCanClose] = useState(false);

  const handleDelete = () => {
    deleteTopic(id);
  }

  useEffect(() => {
    if(loading) setCanClose(prev => true);
    else if(!loading && canClose) handleClose();
  }, [loading])

  return (
    <Box sx={styles}>
      <p>Please confirm before deleting the topic</p>
      <Box className="buttons">
        <Box className="buttons">
          <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
          <LoadingButton loading={loading} size="small" variant="contained" color="error" onClick={handleDelete}>Delete</LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}