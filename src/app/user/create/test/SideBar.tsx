import useCreateTest from "@/hooks/useCreateTest";
import { Box, Card, SxProps } from "@mui/material";

const styles:SxProps = {
  width: "180px",
  height: "100%",
  flexShrink: "0",
  cursor: "pointer",
  ".option":{
    width: "100%",
    height: "60px",
    borderBottom: "0.3px solid #C0C0C0",
    background: "#FFF",
  },
  ".active":{
    background: "#F4F5F9 !important",
  },
  ".error .details": {
    color: "red",
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
          className={`option center ${index === i ? "active" : "" } ${testDataError[i] ? "error" : "" }`}
          onClick={() => handleClick(i)}
          >
            {/* ${testDataError[i] && "error" } */}
          <p className="details">{option}</p>
        </Box>
      ))}
    </Card>
  )
}