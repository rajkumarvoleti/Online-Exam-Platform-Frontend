import ModalComponent from "@/components/ModalComponent";
import { Box, Checkbox, IconButton, SxProps } from "@mui/material";
import DeleteQuestionsModal from "./DeleteQuestionsModal";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import useManageQuestions from "./useManageQuestions";

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  margin: "30px",
  mb: 0,
  pb: 0,
  gap: "5px",
  pl:"16px",
  h4:{
    margin: 0,
    fontSize: "16px",
    color: "#f44336",
  },

  ".selectAllcheckbox":{
    padding:"0"
  }
}

export default function DeleteQuestions({topicId}:{topicId:number}) {

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const {addAllQuestions, removeAllQuestions} = useManageQuestions();

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleCheckBox = () => {
    setChecked(prev => !prev);
  }

  useEffect(() => {
    if(checked)
      addAllQuestions();
    else
      removeAllQuestions();
  }, [checked])
  

  return (
    <Box sx={styles}>
      <Checkbox  className="selectAllcheckbox" color="error" checked={checked} size="small" onClick={handleCheckBox} />
      {checked && <h4>Unselect All</h4>}
      {!checked && <h4>Select All</h4>}
      <IconButton onClick={handleOpenDeleteModal} size="small">
        <DeleteIcon color="error" />
      </IconButton>
      <ModalComponent open={openDeleteModal}>
        <DeleteQuestionsModal topicId={topicId}  handleClose={handleCloseDeleteModal} />
      </ModalComponent>
    </Box>
  )
}