import { ListItem, ListItemButton, ListItemText, SxProps } from "@mui/material";
import DrawerIcon from "./DrawerIcon";
import { IDrawerListItem } from "@/interfaces/componentInterfaces";
import { useRecoilState } from "recoil";
import { drawerIndexAtom } from "@/utils/atoms/drawerAtom";
import { useRouter } from "next-nprogress-bar";


export default function SimpleDrawerListItem({Item}:{Item:IDrawerListItem}){

  const [activeIndex, setActiveIndex] = useRecoilState(drawerIndexAtom);
  const router = useRouter();

  const handleClick = () => {
    setActiveIndex(Item.Index);
    router.push(`/user/${Item.href}`)
  }

  return(
    <ListItem className={Item.Index === activeIndex ? "active listItem" : "listItem"}>
      <ListItemButton onClick={handleClick} className="button">
        <DrawerIcon Icon={Item.Icon} />
        <ListItemText className="text" is="p" primary={Item.Text}/>
      </ListItemButton>
    </ListItem>
  )
}