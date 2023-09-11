import { useQuestion } from "@/hooks/exam/useCreateQuestion";
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
    width: "136px",
    height:"30px",
    color: "#969696",
  }
}

export default function Footer({topicId}:{topicId:number}) {

  const { loading } = useQuestion();

  return (
    <Card sx={styles}>
      <Button color="success" variant="outlined">Cancel</Button>
      <Button color="success" variant="outlined">Save & Next</Button>
      {loading ? 
      <LoadingButton loading variant="contained" />:
      <Button type="submit" color="success" variant="outlined">Save</Button>
      }
    </Card>
  )
}