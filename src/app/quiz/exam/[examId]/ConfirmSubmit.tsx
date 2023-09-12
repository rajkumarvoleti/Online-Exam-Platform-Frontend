import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { useQuiz } from '@/hooks/useQuiz';
import { useRouter } from 'next-nprogress-bar';

export default function ConfirmSubmit({open, handleClose, examId}:{open: boolean, handleClose:() => void, examId:number}) {

  const {handleSubmit} = useQuiz();
  const router = useRouter();

  const onSubmit = () => {
    handleSubmit();
    router.push(`/quiz/result/${examId}`);
    if(document)
      document.exitFullscreen();
    handleClose();
  }

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle >
          Please confirm before submit
        </DialogTitle>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose}>Close</Button>
          <Button variant='contained' onClick={onSubmit} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
