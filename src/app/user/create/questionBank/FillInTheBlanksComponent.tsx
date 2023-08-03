import { Box, InputLabel, OutlinedInput, SxProps } from "@mui/material";

const styles:SxProps = {
  padding: "20px",
  ".inputBox":{
    display: "flex",
    alignItems:"center",
    gap: "10px",
    ".input":{
      maxWidth: "300px",
      height: "43px",
    },
    ".label":{
      color: "#000",
      fontSize: "18px",
    }
  }
}

export default function FillInTheBlanksComponent() {
  return (
    <Box sx={styles}>
      {[...Array(6)].map((val,i) => {
        return (
          <Box key={i} className="inputBox">
            <InputLabel className="label">Answer {i+1}:</InputLabel>
            <OutlinedInput className="input" />
          </Box>
        )
      })}
    </Box>
  )
}