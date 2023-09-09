import OptionsMenu from "@/components/OptionsMenu";
import SearchBarComp from "@/components/SearchBarComp";
import FilterButton from "@/components/buttons/FilterButton";
import { Box, Button, SxProps } from "@mui/material";

const styles:SxProps = {
  pb: "30px",
}

export default function Header() {
  return (
    <Box sx={styles}>
      <h4>Total Test: 07</h4>
      <Button variant="outlined">+ Create Test</Button>
      <SearchBarComp />
      <FilterButton />
    </Box>
  )
}