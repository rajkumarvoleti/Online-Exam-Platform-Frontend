import CircularNumberButton from "@/components/buttons/CircularNumberButton";
import { Accordion, AccordionDetails, AccordionSummary, Box, SxProps } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SyntheticEvent, useState } from "react";

const styles:SxProps = {
  display: "flex",
  flexDirection: "column-reverse",
  ".summary .MuiAccordionSummary-content":{
    flexGrow: "0",
    height: "36px",
    display: "flex",
    alignItems: "center",
    margin: "0 5px",
    ".tab":{
      margin: "5px 0",
      color: "rgba(34, 0, 165, 0.85)",
    },
  },
  ".icon" :{
    color: "rgba(34, 0, 165, 0.85)"
  },
  ".details":{
    height: "35vh",
    overflowY: "scroll",
    margin: "0",
    display: "flex",
    flexWrap: "wrap",
  }
}

export default function QuestionNumbersBox() {

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const onChange = (e:SyntheticEvent,expanded:boolean) => {
    setIsExpanded(expanded);
  }

  return (
    <Accordion
      sx={styles}
      disableGutters 
      elevation={0}
      onChange={onChange}>
      <AccordionSummary
        className="summary center"
        expandIcon={<ExpandMoreIcon className="icon" />}
      >
        {isExpanded ? <p className="tab">Minimize Tab</p> : <p className="tab">Maximize Tab</p>}
      </AccordionSummary>
      <AccordionDetails className="details">
        {[...Array(20)].map((x, i) =>
          <CircularNumberButton size="medium" type="notVisited"  key={i} />
          )}
      </AccordionDetails>
    </Accordion>
  )
}