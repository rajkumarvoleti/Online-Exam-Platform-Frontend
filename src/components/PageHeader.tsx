import { Card, SxProps } from "@mui/material";

const styles:SxProps = {
  margin: 0,
  display: "flex",
  pl: "10px",
}

const urls = {
  "/user/profile":"Profile",
}

export default function PageHeader({text}:{text:string}){
  return (
    <Card sx={styles} variant="outlined">
      <h5>{text}</h5>
    </Card>
  )
}