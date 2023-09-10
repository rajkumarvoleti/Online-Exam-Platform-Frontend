import EditDeleteOptionsMenu from "@/components/EditDeleteOptionsMenu";
import ModalComponent from "@/components/ModalComponent";
import { Box, Card } from "@mui/material";
import EditTopicModal from "./EditTopicModal";
import DeleteTopicModal from "./DeleteTopicModal";
import { useState } from "react";
import { ITopic } from "@/interfaces/examInterfaces";
import { useRouter } from "next-nprogress-bar";

export default function Topic({topic}:{topic:ITopic}) {

  const router = useRouter();

  const handleClick = (topic:ITopic) => {
    router.push(`/user/questionBank/topic/${topic.id}`);
  }

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const handleEdit = () => {
    router.push(`/user/edit/topic/${topic.id}`);
  }

  if(!topic.id)
    return

  return (
    <Box className="topicCard">
      <Box className="details">
        <Box onClick={() => handleClick(topic)}>
          <h5>{topic.name}</h5>
        </Box>
        <EditDeleteOptionsMenu handleEdit={handleOpenEditModal} handleDelete={handleOpenDeleteModal} />
      </Box>
      <p className="questionCount">Questions: {topic.questionsCount}</p>
      <ModalComponent open={openEditModal}>
        <EditTopicModal topic={topic} handleClose={handleCloseEditModal} />
      </ModalComponent>
      <ModalComponent open={openDeleteModal}>
        <DeleteTopicModal handleClose={handleCloseDeleteModal} id={topic.id || 1} />
      </ModalComponent>
    </Box>
  )
}