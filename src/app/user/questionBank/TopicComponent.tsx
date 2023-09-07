import { Box, IconButton, SxProps } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ITopic } from "@/interfaces/examInterfaces";
import { useState } from "react";
import ModalComponent from "@/components/ModalComponent";
import DeleteTopicModal from "./subject/[subjectId]/DeleteTopicModal";
import EditTopicModal from "./subject/[subjectId]/EditTopicModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next-nprogress-bar";

const styles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center !important",
  ".chapter": {
    color: "#2200A5",
    fontSize: "16px",
    lineHeight: "24.542px",
    padding: "10px 5px",
  },
  ".chapter.active": {
    color: "#C2E830",
  },
  ".icons":{
    width: "70px",
    flexShrink: "0",
  }
}

export default function TopicComponent({ topic }: { topic: ITopic }) {

  const pathName = usePathname();
  const router = useRouter();
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const handleEdit = () => {
    router.push(`/user/edit/topic/${topic.id}`);
  }

  const redirectLink = `/user/questionBank/${topic.id}?topicName=${topic.name}`;
  const cleanRedirectLink = `/user/questionBank/${topic.id}`;

  if (!topic.id)
    return <></>;

  return (
    <Box sx={styles}>
      <Link className={pathName === cleanRedirectLink ? "chapter active" : "chapter"} href={redirectLink} >
        {topic.name}
      </Link>
      <Box className="icons">
        <IconButton onClick={handleEdit} size="small">
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
        <EditTopicModal topic={topic} handleClose={handleCloseEditModal} />
      </ModalComponent>
    </Box>
  )
}