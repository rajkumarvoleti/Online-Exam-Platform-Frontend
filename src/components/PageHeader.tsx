import { Card, SxProps } from "@mui/material";
import { usePathname } from "next/navigation";

const styles:SxProps = {
  margin: 0,
  display: "flex",
  pl: "10px",
}

const urls:{[key: string]: string} = {
  "/user/profile":"Profile",
  "/user/dashboard":"Dashboard",
  "/user/create/test/display":"Test",
  "/user/create/test":"Create test",
  "/user/create/questionBank":"Create Question bank",
  "/user/edit/test":"Create test",
  "/user/edit/questionBank":"Create Question bank",
  "/user/edit/question":"Create Question bank",
  "/user/test":"Test",
}

export default function PageHeader({text}:{text:string}){

  const pathName = usePathname();

  return (
    <Card sx={styles} variant="outlined">
      <h5>{urls[pathName] || "Question Bank"}</h5>
    </Card>
  )
}