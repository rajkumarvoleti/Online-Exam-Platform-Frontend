import { INextImage } from "@/interfaces/imageInterfaces";
import { IconButton } from "@mui/material";
import Image from "next/image";

export default function ExternalLoginButton({ButtonIcon, login}:{ButtonIcon:INextImage, login:() => void}){
  return (
    <IconButton onClick={login}>
      <Image src={ButtonIcon.src} alt="header-logo" height="23" width="23"/>
    </IconButton>
  )
}