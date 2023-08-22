"use client";

import { Box, Button } from "@mui/material";
import { useRouter } from "next-nprogress-bar";

const styles = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ".time":{
    width:"300px",
    display:"flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button:{
    mt: "30px",
  }
}

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/signin");
  }

  return (
    <Box sx={styles}>
      <Button variant="contained" onClick={handleClick} >Login</Button>
    </Box>
  );
}