import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IInputProps } from '@/interfaces/inputInterfaces';
import { SxProps } from '@mui/material';
import { useFormikContext } from 'formik';

const styles: SxProps = {
  mt:"0",
  ".error": {
    color: "red",
    ml: "10px"
  },
  ".input":{
    mt: "6px",
  }
}

export default function AutoCompleteInput(props:IInputProps) {

  const formikContext = useFormikContext();

  const handleChange = (e:any,value:any) => {
    if(!value)
      value = {id: "", label: ""};
    console.log(value);
    formikContext.setFieldValue(props.name,value);
    formikContext.setFieldTouched(props.name, true);
    // formikContext.validateField(props.name);
  }

  return (
    <Box className="customInput" sx={styles}>
    <InputLabel className="label">{props.label}</InputLabel>
    <Autocomplete
      value={props.autoCompleteOption}
      className='customInput'
      options={props.options || []}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      autoHighlight
      onChange={handleChange}
      getOptionDisabled={opt => opt.id === ""}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.id}>
            {option.label}
          </li>
        )
      }}
      renderInput={(params) => (
        <TextField
        onChange={props.onChange}
        variant='outlined'
        className='input'
        {...params}
        size='small'
        inputProps={{
          ...params.inputProps,
        }}
        
        />
        )}
    />
    </Box>
  );
}