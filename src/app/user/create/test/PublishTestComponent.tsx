import {Box, Divider, SxProps} from '@mui/material';
import Image from 'next/image';
import PublishIcon from '@/assets/publish test/publish.svg';
import ListArrowIcon from '@/assets/common/listArrow.svg';

const styles:SxProps = {
  padding: "0 30px",
  ".header":{
    display: "flex",
    gap: "20px",
    alignItems: "center",
    backgroundColor: "#FAFBFB",
    padding: "10px 30px",
    h4: {
      color: "#2200A5",
      fontSize: "25px",
      fontWeight: "400",
      ":last-child":{
        marginLeft: "auto",
      },
    },
  },
  ".divider":{
    mr: "60px"
  },
  ".publishMain":{
    display: "flex",
    alignItems: "start",
    ".container": {
      flex: 5,
      h5: {
        color: "#000",
        fontSize: "25px",
        fontWeight: "400",
      },
      ul :{
        pl: "0",
      },
      li: {
        color: "#5B5B5B",
        fontSize: "20px",
        fontWeight: "400",
        listStyle: "none",
        background:`url(${ListArrowIcon.src}) left center no-repeat`,
        pl: "40px",
      },
      span: {
        color: "#000",
        fontSize: "20px",
        fontWeight: "400",
      }
    }
  }
}

export default function PublishTestComponent() {
  return (
    <Box sx={styles}>
      <Box className="header">
        <h4>NEET Test </h4>
        <Image src={PublishIcon.src} width={PublishIcon.width} height={PublishIcon.height} alt='icon' />
        <h4>Test Status: Unpublished</h4>
      </Box>
      <Box className="publishMain">
        <Box className="container">
          <h5>Instructions :-</h5>
          <ul>
            <li>Total Number Of Questions : <span>50</span></li>
            <li>Time Duration : <span>3 Hours and 30 Minutes</span></li>
            <li>Result Declaration : <span>After 2 weeks</span></li>
            <li>Re-Attempt Allow : <span>Yes</span></li>
            <li>Question Appearence :<span>50</span></li>
            <li>Total Number Of Questions : <span>Single</span></li>
            <li>Negative Marks :<span>NA</span></li>
            <li>Pass Percentage :<span>36</span></li>
          </ul>
        </Box>
        <Divider className='divider' flexItem orientation='vertical' variant='middle' />
        <Box className="container">
          <h5>Note :-</h5>
          <ul>
            <li>Test must contains atleast one question or more.</li>
            <li>Number Of Questions In Test should br Equal or Greater then you mentioned Questions Number in Step-1 Create Test .</li>
            <li>Press Publish button for publishing your test.</li>
            <li>Press unpublish button for unpublishing your test.</li>
          </ul>
        </Box>
      </Box>
    </Box>
  )
}