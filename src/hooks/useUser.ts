import { IUser } from "@/interfaces/userInterfaces";
import { sessionAtom } from "@/utils/atoms/sessionAtom";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function useUser() {
  const session = useRecoilValue(sessionAtom);
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    setUser(session.user);
  }, [session])

  return user;
}