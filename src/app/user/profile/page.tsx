"use client"

import { Box, SxProps, Card, MenuList, MenuItem, ListItemText } from "@mui/material";
import BasicForm from "./BasicUserForm";
import { useState } from "react";
import UserDetailsForm from "./UserDetailsForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

const styles:SxProps = {
  ".basicFormik":{
    display: "flex",
    flexWrap: "wrap",
    margin:"20px",
    gap:"10px"
  },
  ".container":{
    display:"grid",
    gridTemplateColumns: "1fr 4fr",
    ".options,":{
      margin:" 7px",
      // ml:"10px"
  
    },
  },
  
  ".forms":{
    padding: "6px",
    margin:"6px",
    minHeight:"57vh",
    mr:"18px"
  },
  ".menuItem":{
    margin: "10px",
    padding: "10px"
  },
  ".menuItem.Mui-selected":{
    color: "#2200A5",
  },
  ".basicForm":{
    margin:"10px",
    mb:"0px"

  }
}

export default function Page() {

  const [formNumber, setFormNumber] = useState<number>(1);

  return (
    <Box sx={styles}>
      <Card elevation={0.5} className="basicForm">
        <BasicForm />
      </Card>
      <Box className="container">
        <Card elevation={0.5} className="options">
          <MenuList dense>
            <MenuItem onClick={() => setFormNumber(1)} className="menuItem" selected={formNumber === 1}>
              <ListItemText>My Details</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => setFormNumber(2)} className="menuItem" selected={formNumber === 2}>
              <ListItemText>Password</ListItemText>
            </MenuItem>
          </MenuList>
        </Card>
        <Card elevation={0.5} className="forms">
          {formNumber === 1 && <UserDetailsForm />}
          {formNumber === 2 && <UpdatePasswordForm />}
        </Card>
      </Box>
    </Box>
  )
}