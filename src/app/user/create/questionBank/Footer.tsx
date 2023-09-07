import { Box, Button, Card, SxProps } from "@mui/material";
import { ReactNode } from "react";

const styles:SxProps = {
  display: "flex",
  height: "70px",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "20px",
  gap: "10px",
  width: "100%",
  mt: "50px !important",
  "button":{
    width: "150px",
    color: "#B3B3B3"

  },
  ".submitButton":{
    color: "#2200A5"
  },
}

export default function Footer({children}:{children:ReactNode}) {
  return (
    <Box sx={styles}>
      {children}
    </Box>
  )
}