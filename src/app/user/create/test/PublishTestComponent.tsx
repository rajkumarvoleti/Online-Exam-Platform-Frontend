import {Box, Button, Divider, SxProps} from '@mui/material';
import Image from 'next/image';
import PublishIcon from '@/assets/publish test/publish.svg';
import DotIcon from '@/assets/icons/DotIcon.png';
import HandIcon from '@/assets/icons/HandIcon.png';
import Footer from './Footer';
import useCreateTest from '@/hooks/useCreateTest';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';

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
        margin: "20px 0",
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

  const {handleBack, publishTest, testData, loading} = useCreateTest();

  const timeDuration = testData.testSettings.testDurationAvailability === "always" ? "always" : `${Math.floor(testData.testSettings.testDuration/60)} Hours and ${testData.testSettings.testDuration%60} Minutes`;

  return (
    <Box sx={styles}>
      <Box className="header">
        <h4>{testData.testDetails.testName} </h4>
        <Image src={PublishIcon.src} width={PublishIcon.width} height={PublishIcon.height} alt='icon' />
        <h4>Test Status: Unpublished</h4>
      </Box>
      <Box className="publishMain">
        <Box className="container container1">
          <h5>Instructions :-</h5>
          <ul>
            <li><p>Total Number Of Questions </p>:<span>{testData.testDetails.totalQuestions}</span></li>
            <li><p>Time Duration </p>:<span>{timeDuration}</span></li>
            <li><p>Result Declaration </p>:<span>{testData.testSettings.resultFormat}</span></li>
            <li><p>Negative Marks</p>:<span>{testData.testSettings.negativeMarks}</span></li>
            <li><p>Pass Percentage</p>:<span>{testData.testSettings.passPercentage}</span></li>
          </ul>
        </Box>
        <Box className="container container2">
          <h5>Note :-</h5>
          <ul>
            <li>Test must contains atleast one question or more.</li>
            <li>Number Of Questions In Test should be Equal or Greater then you mentioned Questions Number in Step-1 Create Test .</li>
            <li>Press Publish button for publishing your test.</li>
            <li>Press unpublish button for unpublishing your test.</li>
          </ul>
        </Box>
      </Box>
      <Footer>
        <Button onClick={handleBack} color="success" variant="outlined">Back</Button>
        <LoadingButton className='submitButton' color="success" disabled={loading} loading={loading} onClick={publishTest} variant="outlined">Publish</LoadingButton>
      </Footer>
    </Box>
  )
}