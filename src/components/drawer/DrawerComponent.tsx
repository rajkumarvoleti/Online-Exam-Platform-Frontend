"use client"

import {  Box, Card, SxProps } from "@mui/material";
import Image from "next/image";
import Logo from '@/assets/user/layout-header-logo.png';
import DrawerList from "./DrawerList";
import { drawerItems } from "./DrawerItems";
import Account from "../Account";

const styles:SxProps = {
  height: "100vh",
  width:"240px",
  flexShrink: "0",
  position: "sticky",
  top: 0,
  ".logo":{
    margin:"20px",
  },
  ".list":{
    minHeight: "75vh",
  }
}

export default function DrawerComponent() {
  return (
    <Card
      sx={styles}
      className="drawer" 
    >
      <Image className="logo" src={Logo.src} height={Logo.height/1.2} width={Logo.width/1.2} alt="logo"/>
      <Box className="list">
        <DrawerList items={drawerItems}/>
      </Box>
      <Account/>
    </Card>
  )
}