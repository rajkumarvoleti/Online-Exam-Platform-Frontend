import { atom } from "recoil";


export const drawerIndexAtom = atom<string>({
  key: "drawerIndex",
  default: "1",
});