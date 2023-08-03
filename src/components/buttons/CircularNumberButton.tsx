import { useQuiz } from "@/hooks/useQuiz";
import { INumberButtonSize, INumberButtonType } from "@/interfaces/buttonInterfaces";
import { Box, Button, IconButton, SxProps } from "@mui/material";
import { MouseEventHandler } from "react";

const styles = {
  margin: "10px",
  ".small":{
    width:"25px",
    height: "25px",
    ".text":{
      fontSize: "0.6em",
    },
  },
  ".medium":{
    width:"38px",
    height: "38px",
    ".text":{
      fontSize: "0.7em",
    },
  },
  ".responded":{
    backgroundColor: "#23C552",
    ":hover":{
      backgroundColor: "#23C552",
    },
    ".text":{
      color: "white",
    },
  },
  ".notVisited":{
    border: "1px solid #676767",
    backgroundColor: "#F1F1F1",
    ":hover":{
      backgroundColor: "#F1F1F1",
    },
    ".text":{
      color: "#676767",
    },
  },
  ".markedForReview":{
    border: "1px solid #C782FF",
    ".text":{
      color: "#C782FF",
    },
  },
  ".notResponded":{
    backgroundColor: "#F84F31",
    ":hover":{
      backgroundColor: "#F84F31",
    },
    ".text":{
      color: "white",
    },
  },
  ".respondedAndMarked":{
    backgroundColor: "#C782FF",
    ":hover":{
      backgroundColor: "#C782FF",
    },
    ".text":{
      color: "white",
    },
  },
}

export default function CircularNumberButton({size, type, number, onClick}:{size:INumberButtonSize, type:INumberButtonType, number:number, onClick?:MouseEventHandler}) {

  return (
    <Box sx={styles}>
      <IconButton onClick={onClick} className={`${size} ${type} center`}>
        <p className="text">{number}</p>
      </IconButton>
    </Box>
  )
}