import useLogout from "@/hooks/auth/useLogout";
import { Button, IconButton } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function LogoutButton() {

  const {logout} = useLogout();

  return <IconButton color="primary" className="logoutButton"  onClick={logout}><PowerSettingsNewIcon /></IconButton>
}