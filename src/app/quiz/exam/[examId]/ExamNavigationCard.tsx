import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Image from "next/image";
import UserImage from '@/assets/user/userImage.png';
import useUser from "@/hooks/useUser";
import { ITime, getTwoDigit } from "@/utils/timeUtils";
import QuestionResponseInfo from "./QuestionResponseInfo";
import QuestionNumbersBox from "./QuestionNumbersBox";
import { SxProps } from "@mui/material";

const styles:SxProps = {
  width: "400px",
  padding: "20px",
  paddingBottom: "0",
  margin: "0 20px",
  position: "sticky",
  marginLeft: "auto",
  marginBottom: "auto",
  top: "90px",
  ".userInfo":{ 
    display: "flex",
    alignItems: "center",
    gap :"20px",
    h3:{
      margin: "0"
    },
    ".details":{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  ".timeRemaining": {
    display:"flex",
    ".p":{
      margin: "5px 0",
    },
    ".time":{
      color: "#4946D2",
      padding: "0 5px"
    }
  },
  ".questionInfo":{
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    margin: "10px 0",
    ".buttonBox:last-child":{
      gridColumn: "span 2",
    }
  },
}

export default function ExamNavigationCard ({time}:{time:ITime}) {

  const user = useUser();

  return (
    <Card sx={styles}>
      <Box className="container1">
        <Box className="userInfo">
          <Image src={UserImage.src} width={"60"} height={"60"} alt="user" />
          <Box className="details">
            <h3>{`${user?.firstName || ""} ${user?.lastName || ""}`}</h3>
            <Box className="timeRemaining">
              <p className="p">Time Remaining: </p> 
              <p className="p time">{getTwoDigit(time.hours)}:{getTwoDigit(time.minutes)}:{getTwoDigit(time.seconds)}</p>
            </Box>
          </Box>
        </Box>
        <Box className="questionInfo">
          <QuestionResponseInfo type="responded" text={"Responded"}  />
          <QuestionResponseInfo type="notVisited" text={"Not Visited"}  />
          <QuestionResponseInfo type="notResponded" text={"Not Responded"}  />
          <QuestionResponseInfo type="markedForReview" text={"Marked for Review"}  />
          <QuestionResponseInfo type="respondedAndMarked" text={"Responded and Marked for review"}  />
        </Box>
      </Box>
      <Box className="container2">
        <QuestionNumbersBox />
      </Box>
    </Card>
  )
}