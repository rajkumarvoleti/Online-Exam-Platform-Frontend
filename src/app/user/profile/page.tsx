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
  },
  ".options, .forms":{
    padding: "10px",
  },
  ".forms":{
    minHeight:"57vh",
  },
  ".menuItem":{
    margin: "10px",
    padding: "10px"
  },
  ".menuItem.Mui-selected":{
    color: "#2200A5",
  }
}

export default function Page() {

  const [formNumber, setFormNumber] = useState<number>(1);

  return (
    <Box sx={styles}>
      <Card>
        <BasicForm />
      </Card>
      <Box className="container">
        <Card className="options">
          <MenuList dense>
            <MenuItem onClick={() => setFormNumber(1)} className="menuItem" selected={formNumber === 1}>
              <ListItemText>My Details</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => setFormNumber(2)} className="menuItem" selected={formNumber === 2}>
              <ListItemText>Password</ListItemText>
            </MenuItem>
          </MenuList>
        </Card>
        <Card className="forms">
          {formNumber === 1 && <UserDetailsForm />}
          {formNumber === 2 && <UpdatePasswordForm />}
        </Card>
      </Box>
    </Box>
  )
}