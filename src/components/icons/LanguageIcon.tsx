import Image from "next/image";
import Icon from '@/assets/icons/languageIcon.svg';

export default function LanguageIcon() {
  return (
    <Image alt="icon" src={Icon.src} width={Icon.width} height={Icon.height}/>
  )
}