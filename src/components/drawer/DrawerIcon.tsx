import { INextImage } from "@/interfaces/imageInterfaces";
import { ListItemIcon, SxProps } from "@mui/material";
import Image from "next/image";

const styles:SxProps = {
  minWidth: "30px",
  ".icon":{
    fill: "red"
  }
}

export default function DrawerIcon({Icon}:{Icon:INextImage}) {
  return(
    <ListItemIcon sx={styles}>
      <Image className="icon" src={Icon.src} width={Icon.width} height={Icon.height} alt="icon"/>
    </ListItemIcon>
  ) 
}