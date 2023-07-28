import Captcha from '@/components/Captcha';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next-nprogress-bar';
import { useEffect, useState, useRef } from 'react';

export default function AlertDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const router = useRouter();

  const handleExit = () => {
    if(document.fullscreenElement)
      document.exitFullscreen();
    router.push("/");
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDisabled(true);
    if(!document.fullscreenElement)
      document.documentElement.requestFullscreen();
  };

  const handleFullScreen = () => {
    if(document.fullscreenElement)
      return;
    handleOpen();
  }

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreen)
    return () => {
      document.removeEventListener("fullscreenchange",handleFullScreen);
    }
  }, [])
  

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Exit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {"Exit Exam?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <Captcha setDisabled={setDisabled} />
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button disabled={disabled} onClick={handleExit} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}