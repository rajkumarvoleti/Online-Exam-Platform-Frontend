import {Box, Button, SxProps} from '@mui/material';
import Image from 'next/image';
import AddQFromBank from '@/assets/add questions/addFromQbank.svg';
import AssignGroup from '@/assets/add questions/assignGroup.svg';
import ManuallyAdd from '@/assets/add questions/manuallyAdd.svg';
import MockTest from '@/assets/add questions/mockTest.svg';
import Random from '@/assets/add questions/random.svg';
import Shuffle from '@/assets/add questions/shuffle.svg';
import UseExcel from '@/assets/add questions/useExcel.svg';

const styles:SxProps = {
  display: "flex",
  flexWrap: "wrap",
  padding: "30px",
  "button":{
    minWidth: "320px",
    height: "80px",
    borderRadius: "15px",
    border: "1px solid #A6BED1",
    margin: "5px",
    "> *":{
      margin: "0 5px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ".buttonText":{
    color: "#575757",
    fontSize: "14px",
    lineHeight: "24.542px", /* 122.711% */
  }
}

export default function AddQuestionsComponent() {
  return (
    <Box sx={styles}>
      <Button fullWidth variant='outlined'>
        <Image src={Shuffle.src} width={Shuffle.width} height={Shuffle.height} alt='icon' />
        <p className='buttonText'>Select Question From Question bank Shuffle Format</p>
      </Button>
      <Button variant='outlined'>
        <Image src={AddQFromBank.src} width={AddQFromBank.width} height={AddQFromBank.height} alt='icon' />
        <p className='buttonText'>Add Questions From Q Bank</p>
      </Button>
      <Button variant='outlined'>
        <Image src={ManuallyAdd.src} width={ManuallyAdd.width} height={ManuallyAdd.height} alt='icon' />
        <p className='buttonText'>Manually Add Questions</p>
      </Button>
      <Button variant='outlined'>
        <Image src={MockTest.src} width={MockTest.width} height={MockTest.height} alt='icon' />
        <p className='buttonText'>Mock Test Question Bank</p>
      </Button>
      <Button variant='outlined'>
        <Image src={UseExcel.src} width={UseExcel.width} height={UseExcel.height} alt='icon' />
        <p className='buttonText'>Use Excel Sheet</p>
      </Button>
      <Button variant='outlined'>
        <Image src={Random.src} width={Random.width} height={Random.height} alt='icon' />
        <p className='buttonText'>Mock Test Random Questions</p>
      </Button>
      <Button variant='outlined'>
        <Image src={AssignGroup.src} width={AssignGroup.width} height={AssignGroup.height} alt='icon' />
        <p className='buttonText'>Assign Group</p>
      </Button>
    </Box>
  )
}