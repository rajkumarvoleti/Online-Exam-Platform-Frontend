import SearchBar from "@mkyy/mui-search-bar";
import { SxProps } from "@mui/material";
import { Box } from "@mui/system";

const styles:SxProps = {
  ".search":{
    borderRadius: "7px",
    border: "1.152px solid #A6BED1",
  },
  "svg":{
    fill: "#1B1464",
  }
}

export default function SearchBarComp({width, height, className}: {width?:string, height?:string, className?:string}) {
  return (
    <Box sx={styles} className={className}>
      <SearchBar width={width} height={height} className="search" />
    </Box>
  )
}