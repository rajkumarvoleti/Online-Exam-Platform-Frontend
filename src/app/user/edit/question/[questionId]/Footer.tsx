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
    width: "134px",
    height:"30px",
    color: "#969696",
    textTransform:"capitalize",
    ":last-child":{
      color: "#2200A5",
    }
  }
}

export default function Footer({questionId}:{questionId:number}) {

  const { handleUpdate, loading } = useManageQuestion();

  return (
    <Card sx={styles}>
      <Button color="success" variant="outlined">Cancel</Button>
      <Button color="success" variant="outlined">Update & Next</Button>
      {loading && <LoadingButton/>}
      {!loading && <Button onClick={() => handleUpdate(questionId)} color="success" variant="outlined">Update</Button>}
    </Card>
  )
}