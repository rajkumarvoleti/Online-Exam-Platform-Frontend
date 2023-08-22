import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Accordion, AccordionDetails, AccordionSummary, Box, FormControlLabel, Radio, SxProps } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IQuestionLevel } from '@/interfaces/questionInterfaces';
import useManageQuestions from './useManageQuestions';

const styles:SxProps = {
  ".buttonText":{
    margin: 0,
    padding: 0,
  },
  h5:{
    fontSize: "16px",
    fontWeight: "400",
    margin: "0",
  },
  ".details":{
    display: "flex",
    flexDirection: "column",
    "label":{
      color: "rgba(0, 0, 0, 0.60)",
    }
  },
  ".MuiAccordionSummary-root > *":{
    margin: "0",
  },
}

export default function FilterMenu() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const {toggleComplexity, toggleType, complexityFilter, typeFilter} = useManageQuestions();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={styles}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='outlined'
      >
        <FilterAltOutlinedIcon /> <p className='buttonText'>Filter</p>
      </Button>
      <Menu
        PaperProps={{sx: {width: '250px'}}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Accordion sx={styles} disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>Filter by Complexity</h5>
          </AccordionSummary>
          <AccordionDetails className='details'>
            <FormControlLabel value="easy" control={
              <Radio size='small' onClick={() => toggleComplexity("easy")} checked={complexityFilter.includes('easy')} />
            } label="Easy"  />
            <FormControlLabel value="medium" control={
              <Radio size='small' onClick={() => toggleComplexity("medium")} />
              } label="Medium" checked={complexityFilter.includes('medium')} />
            <FormControlLabel value="hard" control={
              <Radio size='small' onClick={() => toggleComplexity("hard")} checked={complexityFilter.includes('hard')}  />
            } label="Hard" />
          </AccordionDetails>
        </Accordion>
        <Accordion sx={styles} disableGutters elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h5>Filter by Type</h5>
          </AccordionSummary>
          <AccordionDetails className='details'>
            <FormControlLabel value="subjective" control={
              <Radio size='small' onClick={() => toggleType("subjective")} checked={typeFilter.includes('subjective')} />
            } label="Subjective"  />
            <FormControlLabel value="multipleChoice" control={
              <Radio size='small' onClick={() => toggleType("multipleChoice")} checked={typeFilter.includes('multipleChoice')} />
            } label="Multiple Choice" />
            <FormControlLabel value="fillInTheBlanks" control={
              <Radio size='small' onClick={() => toggleType("fillInTheBlanks")} checked={typeFilter.includes('fillInTheBlanks')} />
            } label="Fill in the blanks"/>
            <FormControlLabel value="trueOrFalse" control={
              <Radio size='small' onClick={() => toggleType("trueOrFalse")} checked={typeFilter.includes('trueOrFalse')} />
            } label="True or false" />
          </AccordionDetails>
        </Accordion>
      </Menu>
    </Box>
  );
}