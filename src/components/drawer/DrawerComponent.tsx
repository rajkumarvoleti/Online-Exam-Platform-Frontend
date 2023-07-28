"use client"

import {  Box, Card, Drawer, SxProps } from "@mui/material";
import Image from "next/image";
import Logo from '../../assets/user/layout-header-logo.png';
import DrawerList from "./DrawerList";
import { drawerItems } from "./DrawerItems";
import Account from "../Account";


const styles:SxProps = {
  height: "100vh",
  width:"300px",
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
      <Image className="logo" src={Logo.src} height={Logo.height} width={Logo.width} alt="logo"/>
      <Box className="list">
        <DrawerList items={drawerItems}/>
      </Box>
      <Account/>
    </Card>
  )
}