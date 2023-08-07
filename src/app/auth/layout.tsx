"use client"

import { Box } from "@mui/material";
import Image from "next/image";
import HeaderLogo from '../../assets/user/layout-header-logo.png';
import UserImage from '../../assets/user/layout-user.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { MsalProvider } from "@azure/msal-react";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { usePathname } from "next/navigation";
import BackToLogin from "@/components/buttons/BackToLogin";

const styles = {
  padding: "40px 80px",
  width: "100vw",
  ".header": {
    diplay: "flex",
    justifyContent: "space-between"
  },
  ".container": {
    display: "flex",
    "> *": {
      flex: 1,
    },
    ".img-container": {
      height: "80vh",
    }
  },
  ".form": {
    width: "464px",
  },
  ".customInput": {
    width: "360px",
    margin: "20px 0",
  }
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();


  const msalConfig: Configuration = {
    auth: {
      clientId: process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID || "",
      authority: 'https://login.microsoftonline.com/common',
      redirectUri: process.env.NEXT_PUBLIC_FRONTEND_URL
    }
  };
  const pca = new PublicClientApplication(msalConfig);

  const googleClientId: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
    <MsalProvider instance={pca}>
    <Box sx={styles}>
      <Box className="center header">
        <Image src={HeaderLogo.src} alt="header-logo" height={HeaderLogo.height} width={HeaderLogo.width} />
        {pathName.includes("forgot") && <BackToLogin />}
      </Box>
      <Box className="container">
        <Box className="img-container center">
          <Image src={UserImage.src} alt="header-logo" height={UserImage.height} width={UserImage.width} priority={true} />
        </Box>
        <Box className="form center">
          {children}
        </Box>
      </Box>
    </Box>
    </MsalProvider>
    </GoogleOAuthProvider>
  )
}
