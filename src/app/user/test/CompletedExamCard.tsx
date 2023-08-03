import { Box, Button, Card, Chip, Divider, SxProps } from "@mui/material";
import LanguageIcon from "@/components/icons/LanguageIcon";

const styles:SxProps = {
  margin: "10px",
  padding:"10px",
  width: "450px",
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
    display:"grid",
    gridTemplateColumns: "repeat(2, 1fr)"
  },
  ".buttonBox":{
    display:"flex",
    justifyContent: "flex-end",
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
  ".languages":{
    display: "flex",
    alignItems: "center",
    gap:"10px",
  },
}

export default function CompletedExamCard() {
  return (
    <Card sx={styles}>
      <Box className="title">
        <p className="heading">Robot Management: </p>
        <p className="blue">Mock Test</p>
      </Box>
      <Box className="container">
          <p>Marks: 30/50</p>
          <p>Accuracy: 70%</p>
          <p>Time Duration: 25mins</p>
          <p>Date: 07-07-2023</p>
      </Box>
      <Box className="buttonBox">
        <Button variant="outlined" size="small"><p className="buttonText">Completed</p></Button>
      </Box>
      <Box className="languages">
        <LanguageIcon />
        <p className="blue">English</p>
        <p className="blue">Hindi</p>
      </Box>
    </Card>
  )
}