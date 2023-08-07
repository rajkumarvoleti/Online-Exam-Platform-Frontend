import { useSubject } from "@/hooks/exam/useSubject";
import { useTopic } from "@/hooks/exam/useTopic";
import { Box, Button, SxProps } from "@mui/material";

const styles: SxProps = {
  ".buttons": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  }
}

export default function DeleteTopicModal({ handleClose, id }: { handleClose: () => void, id: number }) {

  const { deleteTopic } = useTopic();

  const handleDelete = () => {
    deleteTopic(id);
    handleClose();
  }

  return (
    <Box sx={styles}>
      <p>Please confirm before deleting the topic</p>
      <Box className="buttons">
        <Box className="buttons">
          <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
          <Button size="small" variant="contained" color="error" onClick={handleDelete}>Delete</Button>
        </Box>
      </Box>
    </Box>
  )
}