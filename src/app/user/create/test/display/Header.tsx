import OptionsMenu from "@/components/OptionsMenu";
import SearchBarComp from "@/components/SearchBarComp";
import FilterButton from "@/components/buttons/FilterButton";
import { Box, Button, SxProps } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next-nprogress-bar";

const styles:SxProps = {
  pb: "40px",
  display: "flex",
  alignItems: "center",
  gap :"20px",
  ".filter":{
    ml: "auto",
  },
  h4:{
    color: "#000",
  },
  ".buttonText":{
    color: "#000",
    m: "0",
    p: "0",
    pl: "10px",
  }
}

export default function Header() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/user/create/test");
  }

  return (
    <Box sx={styles}>
      <h4>Total Test: 07</h4>
      <Button onClick={handleClick} variant="outlined"><AddIcon fontSize="small" /> <p className="buttonText">Create Test</p></Button>
      {/* <SearchBarComp width="100%"  className="searchBar" /> */}
      <FilterButton className="filter" variant="outlined" />
    </Box>
  )
}