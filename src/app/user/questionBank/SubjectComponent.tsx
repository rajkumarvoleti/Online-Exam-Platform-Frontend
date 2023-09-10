import { Accordion, AccordionDetails, AccordionSummary, Box, Button, IconButton, SxProps } from "@mui/material";
import RoboImage from '@/assets/common/download.svg';
import Image from "next/image";
import { useState } from "react";
import { ISubject } from "@/interfaces/examInterfaces";
import ModalComponent from "@/components/ModalComponent";
import DeleteSubjectModal from "./DeleteSubjectModal";
import EditSubjectModal from "./EditSubjectModal";
import { usePathname } from "next/navigation";
import EditDeleteOptionsMenu from "@/components/EditDeleteOptionsMenu";
import { useRouter } from "next-nprogress-bar";

const styles:SxProps = {
  ".summaryContent": {
    width: "100%",
    display: "flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    // alignItems: "center",
    boxShadow:"none",

    
    ".chapter":{
      ml:"10px",
      fontSize:"14px",
    },
    
    ".details": {
    
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      pl: "10px",
    
      ".subject":{
        margin:"0",
      padding:"0",
        color:"#000",
        fontWeight:"500",
        fontSize:"18px",
      },
    
      ".options":{
     
        color:"#000 !important",
      },
     
    }
  },
  ".addTopicButton":{
    width: "100%",
    // mb: "20px",
  },
  // ".icons": {
  //   width: "70px",
  //   flexShrink: "0",
  //   alignSelf: "flex-start",
  //   // marginLeft: "auto",
  // },
  
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
    router.push(`/user/questionBank/subject/${subject.id}`);
  }

  const handleEdit = () => {
    router.push(`/user/edit/subject/${subject.id}`);
  }

  if (!subject.id)
    return <></>;

  return (
    <Accordion  expanded={openAccordian} disableGutters elevation={0} sx={styles}>
      <AccordionSummary className="summary">
        <Box className="summaryContent">
          {/* <Image className="img" src={RoboImage.src} alt="roboImage" width={RoboImage.width} height={RoboImage.height} /> */}
          <Box onClick={handleSubject} className="details">
            <div className="subject">{subject.name}</div>
          <EditDeleteOptionsMenu className="options" handleDelete={handleOpenDeleteModal} handleEdit={handleOpenEditModal} />

          </Box>
          <div className="chapter">Total Chapters - {subject.topicsCount}</div>

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