"use client"

import PageHeader from "@/components/PageHeader";
import LogoutButton from "@/components/auth/LogoutButton";
import DrawerComponent from "@/components/drawer/DrawerComponent";
import { useDrawer } from "@/hooks/useDrawer";
import { useToast } from "@/hooks/useToast";
import { sessionAtom } from "@/utils/atoms/sessionAtom";
import { Box, SxProps } from "@mui/material";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const styles:SxProps = {
  display:"flex",
  backgroundColor: "#F6F6F6",
  ".main":{
    flexGrow: 1,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {  

  const session = useRecoilValue(sessionAtom);
  
  const {activeItem} = useDrawer();
  const {infoToast} = useToast();
  const router = useRouter();

  useEffect(() => {
    if(!session.isAuthenticated){
      // infoToast({msg:"Please login to continue"});
      router.push("/auth/signin");
    }
  }, [session, router]);

  return (
    <Box sx={styles}>
      <DrawerComponent/>
      <Box component="main" className="main">
        <PageHeader text={activeItem?.Text || ""}/>
        <Box>
          {children}
        </Box>
      </Box>
    </Box>
  )
}