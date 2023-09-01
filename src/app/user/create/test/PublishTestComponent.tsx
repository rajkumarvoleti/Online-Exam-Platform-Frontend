import {Box, Divider, SxProps} from '@mui/material';
import Image from 'next/image';
import PublishIcon from '@/assets/publish test/publish.svg';
import DotIcon from '@/assets/icons/DotIcon.png';
import HandIcon from '@/assets/icons/HandIcon.png';

const styles:SxProps = {
  ".header":{
    display: "flex",
    gap: "10px",
    alignItems: "center",
    backgroundColor: "#FAFBFB",
    padding: "10px 40px",
    h4: {
      fontSize: "20px",
      fontWeight: "500",
      color: "#454545",
      ":last-child":{
        marginLeft: "auto",
      }
    },
  },
  ".publishMain":{
    padding: "10px 40px",
    ".container": {
      mb: "40px",
      h5: {
        color: "#000",
        fontSize: "25px",
        fontWeight: "400",
      },
      ul :{
        pl: "10px",
      },
      li: {
        display: "flex",
        gap: "40px",
        alignItems: "center",
        fontSize: "16px",
        listStyle: "none",
        background:`url(${DotIcon.src}) left center no-repeat`,
        pl: "40px",
        lineHeight: "2.5",
      },
      "span, p": {
        color: "#000",
        fontSize: "16px",
      }
    },
    ".container1":{
      "li p":{
        width: "220px",
        m: 0,
        p: 0,
      }
    },
    ".container2":{
      li:{
        background:`url(${HandIcon.src}) left center no-repeat`,
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
        <Box className="container container1">
          <h5>Instructions :-</h5>
          <ul>
            <li><p>Total Number Of Questions </p>:<span>50</span></li>
            <li><p>Time Duration </p>:<span>3 Hours and 30 Minutes</span></li>
            <li><p>Result Declaration </p>:<span>After 2 weeks</span></li>
            <li><p>Negative Marks</p>:<span>NA</span></li>
            <li><p>Pass Percentage</p>:<span>36</span></li>
          </ul>
        </Box>
        <Box className="container container2">
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