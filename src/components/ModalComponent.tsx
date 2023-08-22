import { Box, SxProps, Modal } from "@mui/material";

const styles: SxProps = {
  ".modalContainer": {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
  }
}

export default function ModalComponent({ children, open }: { children: React.ReactNode, open:boolean }) {

  return (
    <Modal className="center" sx={styles} open={open}>
      <Box className="modalContainer">
        {children}
      </Box>
    </Modal>
  )
}