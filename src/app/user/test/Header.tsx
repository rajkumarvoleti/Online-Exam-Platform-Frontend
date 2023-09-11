import OptionsMenu from "@/components/OptionsMenu";
import SearchBarComp from "@/components/SearchBarComp";
import FilterButton from "@/components/buttons/FilterButton";
import { Box, Button, Card, SxProps } from "@mui/material";

const styles:SxProps = {
  display: "flex",
  justifyContent: "space-between",
  padding:"0px",
  ".container":{
    display:"flex",
    alignItems:"center",
    gap:"20px",
  },
  ".container2":{
    justifyContent: "flex-end",
  },
  ".total":{
    margin: 0,
    color: "#272727",
    fontSize: "22px",
    fontWeight: "550",
    lineHeight: "24.542px",
    // pr: "40px",
  },
  ".filterBtn":{
    border:"1px solid #A6BED1",
    height:"30px",
  }
}

export default function Header({totalExams}:{totalExams:number}) {

  return (
    <Card sx={styles}>
      <Box className="container container1">
        <h6 className="total">Total Test: {totalExams}</h6>
        {/* <Button size="small" variant="outlined" className="createBtn">+ Create Test</Button> */}
      </Box>
      <Box className="container container2">
        <SearchBarComp />
        <FilterButton  className="filterBtn"/>
        <OptionsMenu/>
      </Box>
    </Card>
  )
}