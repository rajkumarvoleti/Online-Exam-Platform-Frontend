import { IDrawerListItem } from "@/interfaces/componentInterfaces";
import NestedDrawerListItem from "./NestedDrawerListItem";
import SimpleDrawerListItem from "./SimpleDrawerListItem";
import { Box, SxProps } from "@mui/material";

const activeStyles:SxProps = {
  ".button":{
    backgroundColor: "rgba(34, 0, 165, 0.70)",
    borderRadius: "10px",
    ":hover":{
      backgroundColor: "rgba(34, 0, 165, 0.70)",
    },
  },
  ".text":{
    color: "white"
  },
  ".icon": {
    filter: "invert(1) brightness(100)"
  }
}

const styles:SxProps = {
  ".active":activeStyles,
  ".listItem":{
    pt: "2px",
    pb: "2px",
  },
  ".button":{
    pt: "5px",
    pb: "5px",
  }
}

export default function DrawerListItem({Item}:{Item:IDrawerListItem}){

  return (
    <Box sx={styles}>
      {Item.Items ? 
        <NestedDrawerListItem Item={Item} /> : 
        <SimpleDrawerListItem Item={Item} />
      }
    </Box>
  )

}