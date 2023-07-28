import { List } from "@mui/material";
import DrawerListItem from "./DrawerListItem";
import { IDrawerListItem } from "@/interfaces/componentInterfaces";

export default function DrawerList({items}:{items:IDrawerListItem[]}){
  return(
    <List>
      {items.map((item,index) => <DrawerListItem key={index} Item={item} />)}
    </List>
  )
}