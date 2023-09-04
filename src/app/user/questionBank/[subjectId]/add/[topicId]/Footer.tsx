import useManageQuestion from "@/hooks/exam/useManageQuestion";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
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
  }
}

export default function Footer({topicId}:{topicId:number}) {

  const { handleSubmit, loading } = useManageQuestion();

  return (
    <Card sx={styles}>
      <Button color="success" variant="outlined">Cancel</Button>
      <Button color="success" variant="outlined">Save & Next</Button>
      <LoadingButton loading={loading} onClick={() => handleSubmit(topicId)} color="success" variant="outlined">Save</LoadingButton>
    </Card>
  )
}