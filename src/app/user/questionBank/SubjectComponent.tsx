import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, SxProps } from "@mui/material";
import RoboImage from '@/assets/common/roboImage.png';
import Image from "next/image";
import { useState } from "react";
import { ISubject } from "@/interfaces/examInterfaces";
import ModalComponent from "@/components/ModalComponent";
import DeleteSubjectModal from "./DeleteSubjectModal";
import EditSubjectModal from "./EditSubjectModal";
import { usePathname, useRouter } from "next/navigation";
import EditDeleteOptionsMenu from "@/components/EditDeleteOptionsMenu";

const styles:SxProps = {
  padding: "5px 0",
  ".summaryContent": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    ".details": {
      width: "190px",
      pl: "10px",
      h5:{
        fontSize: "16px",
      }
    }
  },
  ".addTopicButton":{
    width: "100%",
    mb: "20px",
  },
  ".icons": {
    width: "70px",
    flexShrink: "0",
    alignSelf: "flex-start",
    marginLeft: "auto",
  },
  
}

export default function SubjectComponent({ subject }: { subject: ISubject }) {

  const pathName = usePathname();
  const router = useRouter();
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openAccordian, setOpenAccordian] = useState<boolean>(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);
  
  const handleSubject = () => {
    router.push(`/user/questionBank/${subject.id}`);
  }

  if (!subject.id)
    return <></>;

  return (
    <Accordion  expanded={openAccordian} disableGutters elevation={0} sx={styles}>
      <AccordionSummary className="summary">
        <Box className="summaryContent">
          <Image className="img" src={RoboImage.src} alt="roboImage" width={RoboImage.width} height={RoboImage.height} />
          <Box onClick={handleSubject} className="details">
            <h5>{subject.name}</h5>
            <h6>Chapters - {subject.topicsCount}</h6>
          </Box>
          <EditDeleteOptionsMenu className="options" handleDelete={handleOpenDeleteModal} handleEdit={handleOpenEditModal} />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
      </AccordionDetails>
      <ModalComponent open={openDeleteModal} >
        <DeleteSubjectModal id={subject.id} handleClose={handleCloseDeleteModal} />
      </ModalComponent>
      <ModalComponent open={openEditModal} >
        <EditSubjectModal currSubject={subject} handleClose={handleCloseEditModal} />
      </ModalComponent>
    </Accordion>
  )
}