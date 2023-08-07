import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton } from "@mui/material";
import RoboImage from '@/assets/common/roboImage.png';
import Image from "next/image";
import { useState } from "react";
import { ISubject } from "@/interfaces/examInterfaces";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModalComponent from "@/components/ModalComponent";
import DeleteSubjectModal from "./DeleteSubjectModal";
import EditSubjectModal from "./EditSubjectModal";
import TopicComponent from "./TopicComponent";
import { useTopic } from "@/hooks/exam/useTopic";
import CreateTopicModal from "./CreateTopicModal";

const styles = {
  padding: "5px",
  ".summary": {
    display: "flex",
    alignItems: "center",
    "> *": {
      margin: "10px"
    },
    ".details": {
      pl: "10px",
    }
  },
  ".chapter": {
    color: "#2200A5",
    fontSize: "16px",
    lineHeight: "24.542px",
    cursor: "pointer",
  },
  ".chapter.active": {
    color: "#C2E830",
  },
  ".icons": {
    alignSelf: "flex-start",
    marginLeft: "auto",
  }
}

export default function SubjectComponent({ subject }: { subject: ISubject }) {

  const [topicIndex, setTopicIndex] = useState<number>(0);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openTopicModal, setOpenTopicModal] = useState<boolean>(false);

  const handleOpenTopicModal = () => setOpenTopicModal(true);
  const handleCloseTopicModal = () => setOpenTopicModal(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const handleTopicChange = (i: number) => {
    setTopicIndex(i);
  }

  if (!subject.id)
    return <></>;

  return (
    <Accordion disableGutters elevation={0} sx={styles}>
      <AccordionSummary className="summary">
        <Image src={RoboImage.src} alt="roboImage" width={RoboImage.width} height={RoboImage.height} />
        <Box className="details">
          <h5>{subject.name}</h5>
          <h6>Chapters - {subject.topics.length}</h6>
        </Box>
        <Box className="icons">
          <IconButton onClick={handleOpenEditModal} size="small">
            <EditIcon color="primary" />
          </IconButton>
          <IconButton onClick={handleOpenDeleteModal} size="small">
            <DeleteForeverIcon color="error" />
          </IconButton>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Button onClick={handleOpenTopicModal}>Add Topic</Button>
        {subject.topics.length === 0 && <p>No Topics</p>}
        {subject.topics.map((topic, i) =>
          <TopicComponent key={i} topic={topic} />
        )}
      </AccordionDetails>
      <ModalComponent open={openDeleteModal} >
        <DeleteSubjectModal id={subject.id} handleClose={handleCloseDeleteModal} />
      </ModalComponent>
      <ModalComponent open={openEditModal} >
        <EditSubjectModal currSubject={subject} handleClose={handleCloseEditModal} />
      </ModalComponent>
      <ModalComponent open={openTopicModal}>
        <CreateTopicModal handleClose={handleCloseTopicModal} subjectId={subject.id} />
      </ModalComponent>
    </Accordion>
  )
}