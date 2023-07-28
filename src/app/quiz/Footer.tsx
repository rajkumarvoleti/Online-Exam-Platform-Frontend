import {Box, Button, Card, SxProps} from '@mui/material';

const styles:SxProps = {
  display: "flex",
  padding : "20px 40px",
  width: "100%",
  position: "sticky",
  bottom: 0,
  zIndex: 2,
  "button":{
    height: "38px",
    flexShrink: "0",
    borderRadius: "6px",
  },
  ".container1":{
    flex :"3",
    display: "flex",
    gap: "10px",
  },
  ".container2":{
    flex: "1",
  },
  ".removeResponse":{
    border: "1px solid #676767",
    ".buttonText": {
      color: "#676767",
    },
  },
  ".markForReview":{
    border: "1px solid #C782FF",
    ".buttonText": {
      color: "#C782FF",
    },
  },
  ".saveAndNext":{
    marginLeft: "auto",
    border: "1px solid #C2E830",
    ".buttonText": {
      color: "#969696",
    },
  },
  ".submit":{
    border: "1px solid #C2E830",
    ".buttonText": {
      color: "#2200A5",
    },
  },
}

export default function Footer(){
  return (
    <Card sx={styles}>
      <Box className="container container1">
        <Button className='removeResponse' variant='outlined'>
          <p className="buttonText">Remove Response</p>
        </Button>
        <Button className='markForReview' variant='outlined'>
          <p className="buttonText">Mark for Review</p>
        </Button>
        <Button className='saveAndNext' variant='outlined'>
          <p className="buttonText">Save & Next</p>
        </Button>
      </Box>
      <Box className="container container2 center">
        <Button className='submit' variant='outlined'>
          <p className="buttonText">Submit</p>
        </Button>
      </Box>
    </Card>
  )
}