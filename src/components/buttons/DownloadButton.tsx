import { Button, IconButton } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function DownloadButton({className}:{className?:string}) {
  return (
    <Button className={className}>
      <FileDownloadOutlinedIcon />
    </Button>
  )
}