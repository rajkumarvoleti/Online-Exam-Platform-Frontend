import { Box, Collapse, ListItem, ListItemButton, ListItemText, SxProps } from "@mui/material";
import DrawerIcon from "./DrawerIcon";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { IDrawerListItem } from "@/interfaces/componentInterfaces";
import { useState } from "react";
import DrawerList from "./DrawerList";

export default function NestedDrawerListItem({Item}:{Item:IDrawerListItem}){

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return(
    <>
      <ListItem className="listItem">
        <ListItemButton onClick={handleClick} className="button">
          <DrawerIcon Icon={Item.Icon} />
          <ListItemText className="text" primary={Item.Text}/>
          {open ? <ExpandLess htmlColor="gray" /> : <ExpandMore htmlColor="gray" />}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{pl:"30px"}}>
          <DrawerList items={Item.Items || []} />
        </Box>
      </Collapse>
    </>
  )
}