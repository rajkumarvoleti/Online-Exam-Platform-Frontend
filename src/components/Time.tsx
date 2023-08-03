import useTime from "@/hooks/useTime";
import { ITime, getTwoDigit } from "@/utils/timeUtils";
import { Box } from "@mui/material";

const styles = {
  display:"flex",
}

export default function Time() {
  const time:ITime = useTime();

  return (
    <Box sx={styles}>
      <p>{getTwoDigit(time.hours)}:</p>
      <p>{getTwoDigit(time.minutes)}:</p>
      <p>{getTwoDigit(time.seconds)}</p>
    </Box>
  )
}