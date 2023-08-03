import useUser from "@/hooks/useUser";
import { Box, Card, SxProps } from "@mui/material";
import Image from "next/image";
import userImage from '@/assets/user/userImage.png';

const styles:SxProps = {
  padding: "20px",
  ".header":{
    display: "flex",
    alignItems: "center",
    gap: "30px",
  }
}

export default function DashboardCard() {

  const user = useUser();

  return (
    <Card sx={styles}>
      <Box className="header">
        <Image src={userImage.src} width="100" height="100" alt="user image"/>
        <Box>
          <h6>Welcome {user?.firstName} ! Dashboard</h6>
        </Box>
      </Box>
    </Card>
  )
}