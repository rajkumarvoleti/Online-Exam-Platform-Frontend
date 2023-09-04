import { ITime, getTwoDigit } from "@/utils/timeUtils";
import { Box, Button, Card, MenuItem, Select, SxProps } from "@mui/material";

const styles:SxProps = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: "10px 30px",
  gap: "20px",
  ".testName":{
    flex: 3,
  },
  ".buttons": {
    flex: "0 0 auto",
    ".button":{
      margin: "0 10px",
      height: "30.052px",
      borderRadius: "4.745px",
      border: "0.791px solid #676767",
    },
  },
  ".buttonP":{
    color: "#676767",
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "400",
  },
  ".timeRemaining": {
    flex: "0 0 auto",
    flexShrink: 0,
    display:"flex",
    ".time":{
      color: "#4946D2",
      padding: "0 5px"
    }
  } 
}

export default function Header({time}:{time:ITime}){

  console.log(time);

  return (
    <Card sx={styles}>
      <Box className="testName">
        <h3>Test No.1: Mock Test 029</h3>
      </Box>
      <Box className="buttons">
        <Button className="button" variant="outlined"><p className="buttonP">Question Paper</p></Button>
        <Button className="button" variant="outlined"><p className="buttonP">Instructions</p></Button>
        <Select
          className="button"
          value={"English"}
          label="language"
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={"English"}>
            <p className="buttonP">English</p>
          </MenuItem>
          <MenuItem value={"Telugu"}>
            <p className="buttonP">Telugu</p>
          </MenuItem>
        </Select>
      </Box>
      <Box className="timeRemaining">
        <p>Time Remaining: </p> 
        <p className="time">{getTwoDigit(time.hours)}:{getTwoDigit(time.minutes)}:{getTwoDigit(time.seconds)}</p>
      </Box>
    </Card>
  )
}