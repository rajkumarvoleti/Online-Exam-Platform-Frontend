import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Box, SxProps } from '@mui/material';

const ITEM_HEIGHT = 48;

const styles:SxProps = {
  width: "170px",
  ".item":{
    display: "flex",
    justifyContent: "space-between",
  }
}

export default function EditDeleteOptionsMenu({handleDelete, handleEdit, className}:{handleDelete:() => void, handleEdit:() => void, className?: string}) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onDelete = () => {
    handleClose();
    handleDelete();
  }

  const onEdit = () => {
    handleClose();
    handleEdit();
  }

  return (
    <Box className={className}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        sx={styles}
        className='menu'
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem className='item' onClick={onEdit}>
          Edit
          <EditOutlinedIcon color='primary' />
        </MenuItem>
        <MenuItem className='item' onClick={onDelete}>
          Delete
          <DeleteForeverOutlinedIcon color='error' />
        </MenuItem>
      </Menu>
    </Box>
  );
}
