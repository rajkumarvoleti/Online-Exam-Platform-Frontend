import useLogout from "@/hooks/auth/useLogout";
import { Button } from "@mui/material";

export default function LogoutButton() {

  const {logout} = useLogout();

  return <Button onClick={logout}>Log Out</Button>
}