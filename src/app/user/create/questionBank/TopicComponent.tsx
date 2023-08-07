import { Box, IconButton, SxProps } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ITopic } from "@/interfaces/examInterfaces";
import { useState } from "react";
import ModalComponent from "@/components/ModalComponent";
import DeleteTopicModal from "./DeleteTopicModal";
import EditTopicModal from "./EditTopicModal";

const styles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center !important",
}

export default function TopicComponent({ topic }: { topic: ITopic }) {

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  if (!topic.id)
    return <></>;

  return (
    <Box sx={styles}>
      <p className="chapter">
        {topic.name}
      </p>
      <Box>
        <IconButton onClick={handleOpenEditModal} size="small">
          <EditIcon color="primary" />
        </IconButton>
        <IconButton onClick={handleOpenDeleteModal} size="small">
          <DeleteForeverIcon color="error" />
        </IconButton>
      </Box>
      <ModalComponent open={openDeleteModal} >
        <DeleteTopicModal id={topic.id} handleClose={handleCloseDeleteModal} />
      </ModalComponent>
      <ModalComponent open={openEditModal} >
        <EditTopicModal currTopic={topic} handleClose={handleCloseEditModal} />
      </ModalComponent>
    </Box>
  )
}