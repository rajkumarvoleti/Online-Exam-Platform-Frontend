import { Box, Button, SxProps, capitalize } from "@mui/material";
import SearchBarComp from '@/components/SearchBarComp';
import ModalComponent from '@/components/ModalComponent';
import { useState } from "react";
import CreateSubjectModal from './CreateSubjectModal';
import { useRouter } from "next-nprogress-bar";
import download from '@/assets/common/download.svg';
import filter from '@/assets/common/filter.svg';

import Image from "next/image";

const styles: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  mb: "10px",
  h4: {
    color: "#272727",
    fontSize: "20px",
    fontWeight: "600",
    lineHeight: "24.542px",
  },
  ".smallBtn": {
    border: "2px solid red",
    width: "30px",
  },
  ".buttons": {
    gap: "25px",
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems:"center",


  },
  ".icon": {
    fill: "#C783FF",
  },
  ".newButton": {
    borderRadius: "5px",
    border: "1.152px solid #A6BED1",
    color:"#2200a5"    
  },
  ".searchBar": {
    margin: "15px 0",
    borderRadius:"5px"


  },
}

export default function SideBarHeader({setQuery}:{setQuery:(query:string) => void}) {

  const [openSubjectModal, setOpenSubjectModal] = useState<boolean>(false);
  const router = useRouter();

  const handleOpenSubjectModal = () => setOpenSubjectModal(true);
  const handleCloseSubjectModal = () => setOpenSubjectModal(false);

  const handleClick = () => {
    router.push("/user/create/questionBank");
  }

  return (
    <Box sx={styles}>
      {/* <h4>SUBJECT</h4> */}
      <Box className="buttons">
        <Button onClick={handleClick} className='newButton' variant='outlined'>
          + Add Q Bank
        </Button>
        {/* <FilterAltOutlinedIcon className='icon' /> */}
        <Image className="img" src={filter.src} alt="roboImage" width={filter.width} height={filter.height} />

        <Image className="img" src={download.src} alt="roboImage" width={download.width} height={download.height} />

        {/* <FileDownloadOutlinedIcon className='icon' /> */}
      </Box>
      <SearchBarComp setQuery={setQuery} className='searchBar' width='100%' />
      <ModalComponent open={openSubjectModal}>
        <CreateSubjectModal handleClose={handleCloseSubjectModal} />
      </ModalComponent>
    </Box>
  )
}