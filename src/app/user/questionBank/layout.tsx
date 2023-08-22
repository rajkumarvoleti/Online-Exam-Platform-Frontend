"use client"

import { Box, SxProps } from "@mui/material";
import SideBar from "./SideBar";

const styles: SxProps = {
  display: "flex",
  ".main":{
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