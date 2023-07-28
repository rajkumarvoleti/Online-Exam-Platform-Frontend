import { Box, Button, Card, Chip, Divider, SxProps } from "@mui/material";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LanguageIcon from "@/components/icons/LanguageIcon";

const styles:SxProps = {
  margin: "10px",
  padding:"10px",
  // width: "450px",
  ".blue":{
    color: "#2200A5",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "24.542px",
  },
  ".icon":{
    color: "gray",
  },
  ".title":{
    display:"flex",
    alignItems:"center",
    gap: "5px",
    ".heading":{
      color:"#000",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight:"24.542px",
    },
  },
  ".container":{
    display:"flex",
  },
  ".buttonBox":{
    display:"flex",
    alignItems: "end",
    "button":{
      width: "100px",
      height: "35px",
      borderRadius: "6px",
      border: "1px solid #C2E830",
      ".buttonText":{
        fontSize: "12px",
      color: "#2200A5",
      }
    }
  },
  ".description, .time, .languages":{
    display: "flex",
    alignItems: "center",
    gap:"10px",
  },
  ".divider":{
    height: "20px",
  },
}

export default function ExamCard() {
  return (
    <Card sx={styles}>
      <Chip className="chip" label="Free" variant="outlined" color="success"/>
      <Box className="title">
        <p className="heading">Robot Management: </p>
        <p className="blue">Mock Test</p>
      </Box>
      <Box className="container">
        <Box className="details">
          <Box className="description">
            <DescriptionOutlinedIcon className="icon" />
            <p>50 Questions</p>
            <Divider className="divider" orientation="vertical" />
            <p>30 Minutes</p>
            <Divider className="divider" orientation="vertical" />
            <p>50 marks</p>
          </Box>
          <Box className="time">
            <AccessTimeOutlinedIcon className="icon" />
            <p>14 Jul,9:00 to 15 jul,10:00</p>
          </Box>
        </Box>
        <Box className="buttonBox">
          <Button variant="outlined" size="small"><p className="buttonText">Start Now</p></Button>
        </Box>
      </Box>
      <Box className="languages">
        <LanguageIcon />
        <p className="blue">English</p>
        <p className="blue">Hindi</p>
      </Box>
    </Card>
  )
}