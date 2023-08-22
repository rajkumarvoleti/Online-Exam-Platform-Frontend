import EditDeleteOptionsMenu from "@/components/EditDeleteOptionsMenu";
import ModalComponent from "@/components/ModalComponent";
import { Box, Card } from "@mui/material";
import EditTopicModal from "../EditTopicModal";
import DeleteTopicModal from "../DeleteTopicModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ITopic } from "@/interfaces/examInterfaces";

export default function Topic({topic}:{topic:ITopic}) {

  const router = useRouter();

  const handleClick = (topic:ITopic) => {
    router.push(`/user/questionBank/${topic.subjectId}/${topic.id}?topicName=${topic.name}`);
  }

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  if(!topic.id)
    return

  return (
    <Card className="topicCard">
      <Box onClick={() => handleClick(topic)} className="details">
        <h5>{topic.name}</h5>
        <p className="questionCount">Questions: {topic.questionsCount}</p>
      </Box>
      <EditDeleteOptionsMenu handleEdit={handleOpenEditModal} handleDelete={handleOpenDeleteModal} />
      <ModalComponent open={openEditModal}>
        <EditTopicModal topic={topic} handleClose={handleCloseEditModal} />
      </ModalComponent>
      <ModalComponent open={openDeleteModal}>
        <DeleteTopicModal handleClose={handleCloseDeleteModal} id={topic.id || 1} />
      </ModalComponent>
    </Card>
  )
}