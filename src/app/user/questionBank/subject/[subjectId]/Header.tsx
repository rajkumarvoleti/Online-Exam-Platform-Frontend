import { Button, Card, SxProps } from "@mui/material";
import { Box } from "@mui/material";
import SearchBarComp from "@/components/SearchBarComp";
import { ISubject } from "@/interfaces/examInterfaces";
import { useState } from "react";
import CreateTopicModal from "./CreateTopicModal";
import ModalComponent from "@/components/ModalComponent";
import { useRouter } from "next-nprogress-bar";
import FilterButton from "@/components/buttons/FilterButton";
import OptionsMenu from "@/components/OptionsMenu";

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  justifyContent: "space-between",
  boxShadow:"none",
  borderRadius:"0px",
  ".options":{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  ".newButton":{
    flexShrink: "0",
    borderRadius: "5px",
    border: "1px solid #A6BED1",
    textTransform:"capitalize",
  },
  h4:{
    fontSize: "21px",
    maxWidth: "500px",
    color: "#000000",
    
    span:{
      color: "#000000",

    }
  },
  ".filter":{
textTransform:"capitalize"
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
          + Add 
        </Button>
        <SearchBarComp  onSearch={() => {}} />
        <FilterButton variant="outlined" className="filter" />
        <OptionsMenu />
      </Box>
      <ModalComponent open={openCreateTopicModal}>
        <CreateTopicModal handleClose={handleCloseCreateTopicModal} subjectId={subject.id} />
      </ModalComponent>
    </Card>  
  )
}