import Image from "next/image";
import userImage from '../assets/user/userImage.png';
import { Box, SxProps } from "@mui/material";
import { useRecoilValue } from "recoil";
import { sessionAtom } from "@/utils/atoms/sessionAtom";
import { useEffect, useState } from "react";

const styles:SxProps = {
  display: "flex",
  alignItems: "center",
  alignContent: "flex-end",
  ">*":{
    margin: "10px"
  },
  ".name,.email":{
    margin: 0,
  },
  ".name":{
    fontSize: "16px",
    fontWeight: "600"
  }
}

export default function Account(){

  const session = useRecoilValue(sessionAtom);
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");

  useEffect(() => {
    setName(session.user?.firstName);
    setEmail(session.user?.email);
    }, []);

  return (
    <Box sx={styles}>
      <Image src={userImage.src} width={"40"} height={"40"} alt="user" />
      <Box>
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </Box>
    </Box>
  )
}