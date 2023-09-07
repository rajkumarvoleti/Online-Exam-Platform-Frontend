import { Button, Card, SxProps } from "@mui/material";
import { Box } from "@mui/material";
import SearchBarComp from "@/components/SearchBarComp";
import { ISubject } from "@/interfaces/examInterfaces";
import { useState } from "react";
import CreateTopicModal from "./CreateTopicModal";
import ModalComponent from "@/components/ModalComponent";
import { useRouter } from "next-nprogress-bar";

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  padding: "10px 30px",
  justifyContent: "space-between",
  ".options":{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  ".newButton":{
    flexShrink: "0",
    borderRadius: "6px",
    border: "1.152px solid #C2E830",
    background: "#FFF",
  },
  h4:{
    fontSize: "24px",
    maxWidth: "500px",
    span:{
      color: "#000",

    }
  }
}

export default function Header({subject, setQuery}:{subject:ISubject, setQuery:(val:string) => void}) {

  const router = useRouter();
  const [openCreateTopicModal, setOpenCreateTopicModal] = useState<boolean>(false);
  const handleOpenCreateTopicModal = () => setOpenCreateTopicModal(true);
  const handleCloseCreateTopicModal = () => setOpenCreateTopicModal(false);

  const handleClick = () => {
    router.push(`/user/create/topics/${subject.id}`);
  }

  if(!subject.id)
    return;

  return (
    <Card sx={styles}>
      <h4>Chapters for {subject.name} <span>- {subject.topicsCount}</span></h4>
      <Box className="options">
        <Button onClick={handleOpenCreateTopicModal} className='newButton' variant='outlined'>
          + New
        </Button>
        <SearchBarComp setQuery={setQuery} width="200px" height="35px" />
        {/* <FilterButton variant="outlined" /> */}
        {/* <OptionsMenu /> */}
      </Box>
      <ModalComponent open={openCreateTopicModal}>
        <CreateTopicModal handleClose={handleCloseCreateTopicModal} subjectId={subject.id} />
      </ModalComponent>
    </Card>  
  )
}