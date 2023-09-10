import useCreateTest from "@/hooks/useCreateTest";
import { Box, Card, SxProps } from "@mui/material";

const styles:SxProps = {
  width: "220px",
  flexShrink: "0",
  boxShadow:"none",
  cursor: "pointer",
  borderRadius :"0px 0px  ",
  fontSize:"12px",



  ".option":{
    width: "100%",
    textAlign: "left",
    height: "50px",
    borderBottom: "0.3px solid #f5ecec",
    background: "#FFF",
    justifyContent: "flex-start",
    pl: "20px",
  },
  ".active":{
    // background: "#F4F5F9 !important",
    border:"2px solid #C2E830",
    ".details":{
      color: "#2200A5",
      fontSize:"15px",
      fontWeight:"530"
    },
  },
  ".error .details": {
    color: "red",
  },
  ".details":{
    textAlign:"left",
  }
}

const activeStyles = {
}

const options = ["Test Details", "Test Settings", "Pricing", "Test Status"];

export default function SideBar({index, setIndex}:{index:number, setIndex:(i:number) => void}) {

  const handleClick = (i:number) => {
    console.log(i);
    setIndex(i);
  };
  const {testDataError} = useCreateTest();

  return (
    <Card sx={styles}>
      {options.map((option,i) => (
        <Box
          key={i}
          className={`center option ${index === i ? "active" : "" } ${testDataError[i] ? "error" : "" }`}
          onClick={() => handleClick(i)}
          >
            {/* ${testDataError[i] && "error" } */}
          <p className="details">{option}</p>
        </Box>
      ))}
    </Card>
  )
}