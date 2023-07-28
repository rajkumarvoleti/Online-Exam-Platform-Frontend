"use client"

import { sessionAtom } from "@/utils/atoms/sessionAtom"
import { useRecoilValue } from "recoil"

export default function Page(){
  const session = useRecoilValue(sessionAtom);
  console.log(session);
  return (
    <>Hello</>
  )
}