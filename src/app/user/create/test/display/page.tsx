"use client"

import { Box, SxProps } from "@mui/material";
import Header from "./Header";
import TestTable from "./TestTable";

const styles:SxProps = {
  backgroundColor: "white",
  margin: "10px",
  minHeight: "90vh",
  padding: "30px",
}

export default function Page() {
  return (
    <Box sx={styles}>
      <Header />
      <Box>
        <TestTable />
      </Box>
    </Box>
  )
}