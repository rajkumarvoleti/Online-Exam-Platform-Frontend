import OptionsMenu from "@/components/OptionsMenu";
import SearchBarComp from "@/components/SearchBarComp";
import FilterButton from "@/components/buttons/FilterButton";
import { Box, Button, Card, SxProps } from "@mui/material";

const styles:SxProps = {
  display: "flex",
  justifyContent: "space-between",
  padding:"20px",
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
    fontSize: "24px",
    fontWeight: "500",
    lineHeight: "24.542px",
    pr: "40px",
  },
}

export default function Header() {
  return (
    <Card sx={styles}>
      <Box className="container container1">
        <h6 className="total">Total Test: 07</h6>
        <Button size="small" variant="outlined">+ Create Test</Button>
      </Box>
      <Box className="container container2">
        <SearchBarComp />
        <FilterButton/>
        <OptionsMenu/>
      </Box>
    </Card>
  )
}