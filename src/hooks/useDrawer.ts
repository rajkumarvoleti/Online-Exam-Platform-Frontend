import { IDrawerListItem } from "@/interfaces/componentInterfaces";
import { drawerIndexAtom } from "@/utils/atoms/drawerAtom";
import { findDrawerItem } from "@/utils/helperFunctions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const useDrawer = () => {

  const [activeIndex, setActiveIndex] = useRecoilState(drawerIndexAtom);
  const [activeItem, setActiveItem] = useState<IDrawerListItem>();
  const pathname = usePathname();


  useEffect(() => {
    const drawerItem = findDrawerItem(pathname);
    setActiveItem(drawerItem);
    setActiveIndex(drawerItem.Index);
  }, [pathname, setActiveIndex])

  return {activeItem};

}