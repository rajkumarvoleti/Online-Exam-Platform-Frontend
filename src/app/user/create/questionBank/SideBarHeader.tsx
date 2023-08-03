import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Button } from "@mui/material";
import SearchBarComp from '@/components/SearchBarComp';

const styles = {
  display:"flex",
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
  ".smallBtn":{
    border:"2px solid red",
    width: "30px",
  },
  ".buttons":{
    gap: "10px",
  },
  ".icon":{
    fill: "#C783FF",
  },
  ".newButton": {
    borderRadius: "6px",
    border: "1.152px solid #C2E830",
    background: "#FFF",
  },
  ".searchBar": {
    margin: "10px 0",
  },
}

export default function SideBarHeader() {
  return (
    <Box sx={styles}>
      <h4>TOPIC</h4>
      <Box className="buttons center">
        <Button className='newButton' variant='outlined'>
          + New
          </Button>
        <FilterAltOutlinedIcon className='icon' />
        <FileDownloadOutlinedIcon className='icon' />
      </Box>
      <SearchBarComp className='searchBar' width='250px' />
    </Box>
  )
}