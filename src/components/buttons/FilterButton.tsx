import { Button } from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export default function FilterButton({hideText, variant, className}:{hideText?:boolean, variant?:"text" | "outlined" | "contained", className?:string}) {
  return (
    <Button className={className} variant={variant} size="small">
      <FilterAltOutlinedIcon/>{hideText ? "" :  "Filter"}
    </Button>
  )
}