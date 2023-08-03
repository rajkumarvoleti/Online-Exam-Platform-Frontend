import WordComponent from "@/components/WordComponent";
import { Box, InputLabel, SxProps } from "@mui/material";

const styles:SxProps = {
  padding: "20px",
  ".inputBox":{
    margin: "50px 0",
    alignItems:"center",
    gap: "10px",
    ".label":{
      margin: "20px 0",
      color: "#000",
      fontSize: "18px",
    }
  }
}

export default function MCQComponent() {
  return (
    <Box sx={styles}>
      {[...Array(6)].map((val,i) => {
        return (
          <Box className="inputBox" key={i}>
            <InputLabel className="label">Choice {i+1}</InputLabel>
            <WordComponent />
          </Box>
        )
      })}
    </Box>
  )
}