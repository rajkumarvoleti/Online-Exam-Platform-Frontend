import useCreateTest from "@/hooks/useCreateTest";
import { Box, Card, SxProps } from "@mui/material";

const styles:SxProps = {
  width: "220px",
  flexShrink: "0",
  cursor: "pointer",
  ".option":{
    width: "100%",
    textAlign: "left",
    height: "60px",
    borderBottom: "0.3px solid #C0C0C0",
    background: "#FFF",
    justifyContent: "flex-start",
    pl: "20px",
  },
  ".active":{
    background: "#F4F5F9 !important",
    ".details":{
      color: "#2200A5",
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