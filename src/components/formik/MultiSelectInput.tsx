import { ChangeEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { IAutoCompleteOption, IInputProps } from '@/interfaces/inputInterfaces';
import { Checkbox, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, SxProps } from '@mui/material';
import { useFormikContext } from 'formik';
import { IQuestionBank } from '@/interfaces/otherInterfaces';
import { ITestDetailsForm } from '@/interfaces/formikInterfaces';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "200px",
      width: "200px",
    },
  },
};

const styles: SxProps = {
  mt:"0",
  ".error": {
    color: "red",
    ml: "10px"
  },
  ".input":{
    borderRadius: "8px",
  },
  label:{
    color: "#000",
  }
}

export default function MultiSelectInput(props:IInputProps) {

  const formikContext = useFormikContext<ITestDetailsForm>();
  const prevValues = props.value as string[]
  const [values, setValues] = useState<string[]>(prevValues || []);
  
  const handleChange = (e: SelectChangeEvent<typeof values>) => {
    const value = e.target.value;
    setValues(
      typeof value === "string" ? value.split(",") : value
      );
  };
    
  useEffect(() => {
    formikContext.setFieldValue(props.name,values);
    formikContext.setFieldTouched(props.name, true);
  }, [values])

  useEffect(() => {
    
  }, [])
  
  
  const handleCheckBox = (opt:IAutoCompleteOption) => {
    if(props.push && props.remove){
      const checked = !(values.indexOf(opt.id) > -1);
      console.log(checked);
      const id = parseInt(opt.id,10);
      if(checked)
        props.push(id);
      else
        props.remove(id)
    }
  }

  return (
    <Box className="customInput" sx={styles}>
      <InputLabel className="label">{props.label}</InputLabel>
      <Select
        className='customInput input'
        onChange={handleChange}
        multiple
        value={values}
        input={<OutlinedInput />}
        renderValue={(selected) => selected.map(val => props.options?.find(opt => opt.id === val)?.label).join(",")}
        MenuProps={MenuProps}
      >
        {props.options?.map(opt => (
          <MenuItem onClick={() => handleCheckBox(opt)} key={opt.id} value={opt.id}>
            <Checkbox  checked={values.indexOf(opt.id) > -1} />
            <ListItemText primary={opt.label} />
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}