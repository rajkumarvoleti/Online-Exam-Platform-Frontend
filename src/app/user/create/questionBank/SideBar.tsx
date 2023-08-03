import {Box, Card, Divider} from '@mui/material';
import SideBarHeader from './SideBarHeader';
import TopicComponent from './TopicComponent';

const styles = {
  width: "300px",
  flexShrink: "0",
  padding: "10px 0",
  position:"sticky",
  top: "0px",
  marginLeft: "auto",
  marginBottom: "auto",
  ".main":{
    mt: "10px",
    ">*":{
      borderTop: "0.5px solid #B3B3B3",
    },
    ".heading":{
      textAlign: "center",
      padding: "20px",
    },
    h5: {
      color: "#454545",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "24.542px",
      margin: 0,
    },
    h6: {
      color: "#2200A5",
      fontSize: "16px",
      lineHeight: "24.542px",
      margin: 0,
    }
  }
}

export default function SideBar() {
  return (
    <Card sx={styles}>
      <SideBarHeader />
      <Box className="main">
        <h5 className='heading'>All Subjects</h5>
        <TopicComponent />
        <TopicComponent />
        <TopicComponent />
        <TopicComponent />
      </Box>
    </Card>
  )
}