import { Card, SxProps } from "@mui/material";

const styles:SxProps = {
  margin: 0,
  padding: "10px",
  display: "flex",
}

export default function PageHeader({text}:{text:string}){
  return (
    <Card sx={styles} variant="outlined">
      <h5>{text}</h5>
    </Card>
  )
}