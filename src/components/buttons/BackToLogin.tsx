import { Button } from "@mui/material"
import { useRouter } from "next-nprogress-bar"

export default function BackToLogin() {
  const router = useRouter();
  const handleClick = () => router.push("/auth/signin");

  return (
    <Button variant="outlined" onClick={handleClick}>Back to Login</Button>
  )
}