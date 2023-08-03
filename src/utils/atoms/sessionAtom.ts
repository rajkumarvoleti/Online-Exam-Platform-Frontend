import { ISession } from "@/interfaces/sessionInterfaces";
import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const sessionAtom = atom<ISession>({
  key: "session",
  default: {isAuthenticated: false, user: null},
  effects_UNSTABLE: [persistAtom]
});