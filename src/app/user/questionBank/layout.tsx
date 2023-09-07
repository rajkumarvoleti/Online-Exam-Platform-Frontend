"use client"

import { Box, SxProps } from "@mui/material";
import SideBar from "./SideBar";

const styles: SxProps = {
  display: "flex",
  margin: "10px",
  ".main":{
    margin: "0 10px",
    width: "100%",
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (
    <Box sx={styles}>
      <SideBar />
      <Box className="main">
        {children}
      </Box>
    </Box>
  )
}