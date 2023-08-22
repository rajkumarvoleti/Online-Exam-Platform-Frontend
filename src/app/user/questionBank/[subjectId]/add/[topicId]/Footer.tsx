import useManageQuestion from "@/hooks/exam/useManageQuestion";
import { Button, Card, SxProps } from "@mui/material";

const styles:SxProps = {
  display: "flex",
  height: "70px",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "20px",
  gap: "10px",
  width: "100%",
  "button":{
    width: "150px",
    color: "#969696",
    ":last-child":{
      color: "#2200A5",
    }
  }
}

export default function Footer({topicId}:{topicId:number}) {

  const { handleSubmit } = useManageQuestion();

  return (
    <Card sx={styles}>
      <Button color="success" variant="outlined">Cancel</Button>
      <Button color="success" variant="outlined">Save & Next</Button>
      <Button onClick={() => handleSubmit(topicId)} color="success" variant="outlined">Save</Button>
    </Card>
  )
}