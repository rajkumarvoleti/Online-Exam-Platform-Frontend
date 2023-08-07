import { useSubject } from "@/hooks/exam/useSubject";
import { Box, Button, SxProps } from "@mui/material";

const styles: SxProps = {
  ".buttons": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  }
}

export default function DeleteSubjectModal({ handleClose,id }: { handleClose: () => void, id:number }) {

  const { deleteSubject } = useSubject();

  const handleDelete = () => {
    deleteSubject(id);
    handleClose();
  }

  return (
    <Box sx={styles}>
      <p>Please confirm before deleting the subject</p>
      <Box className="buttons">
        <Box className="buttons">
          <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
          <Button size="small" variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </Box>
      </Box>
    </Box>
  )
}