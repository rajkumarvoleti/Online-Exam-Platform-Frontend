import { InputAdornment } from "@mui/material";
import Image from "next/image";
import {INextImage} from '../../interfaces/imageInterfaces';

const styles = {
  pr:"4px"
}

export default function InputStartAdorment({InputImage}:{InputImage:INextImage}){
  return (
    <InputAdornment position="start" sx={styles}>
      <Image src={InputImage.src} height={InputImage.height} width={InputImage.width} alt="email-icon"/>
    </InputAdornment>
  )
}