import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import RoboImage from '@/assets/common/roboImage.png';
import Image from "next/image";
import { useState } from "react";

const styles = {
  padding: "5px",
  ".summary":{
    display: "flex",
    alignItems: "center",
    "> *":{
      margin: "10px"
    },
    ".details":{
      pl: "10px",
    }
  },
  ".chapter":{
    color: "#2200A5",
    fontSize: "16px",
    lineHeight: "24.542px",
    cursor: "pointer",
  },
  ".chapter.active":{
    color: "#C2E830",
  }
}

export default function TopicComponent() {

  const [chapter, setChapter] = useState<number>(0);

  const handleChapterChange = (i:number) => {
    setChapter(i);
  }

  return (
    <Accordion disableGutters elevation={0} sx={styles}>
      <AccordionSummary className="summary">
        <Image src={RoboImage.src} alt="roboImage" width={RoboImage.width} height={RoboImage.height} />
        <Box className="details">
          <h5>RPA TOPIC - 1</h5>
          <h6>Chapters - 3</h6>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {[...Array(3)].map((value,i) => 
          <p 
            className={chapter === i ? "chapter active": "chapter"}
            key={i}
            onClick={() => handleChapterChange(i)}>
            Chapter {i+1}
          </p>)}
      </AccordionDetails>
    </Accordion>
  )
}