import { useSubject } from "@/hooks/exam/useSubject";
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

export default function DeleteSubjectModal({ handleClose,id }: { handleClose: () => void, id:number }) {

  const { deleteSubject, loading } = useSubject();
  const [canClose, setCanClose] = useState(false);

  const handleDelete = () => {
    deleteSubject(id);
  }

  useEffect(() => {
    if(loading) setCanClose(prev => true);
    else if(!loading && canClose) handleClose();
  }, [loading])
  

  return (
    <Box sx={styles}>
      <p>Please confirm before deleting the subject</p>
      <Box className="buttons">
        <Box className="buttons">
          <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
          <LoadingButton loading={loading} size="small" variant="contained" color="error" onClick={handleDelete}>Delete</LoadingButton>
        </Box>
      </Box>
    </Box>
  )
}