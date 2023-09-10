import { ICreateSubjectTopic } from "@/interfaces/formikInterfaces";
import { Box, Checkbox, IconButton, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useFormikContext } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { FormikInput } from "@/components/formik/FormikInput";

const styles:SxProps = {
  border: "1px solid #B9B9B9",
  borderRadius: "10px",
  width: "809px",
  mb: "10px",
  // p:"20px",
  ".MuiTableCell-root":{
    color: "#5B5B5B",
    fontSize: "14px",
    textAlign: "center",
    padding:"0px"

  },
  ".headingRow":{
    backgroundColor: "#F5F4F999",
    ".MuiTableCell-root":{
      color: "#5B5B5B",
      fontSize: "15px",
    },
  },
  ".MuiTableRow-root":{
    height:"55px",
  },
  ".customInput":{
    height: "50px",
    label:{m:0},
    m: 0,
    ".desc":{m:0},
    '& fieldset': { border: 'none' } ,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"column",
    ".error, label":{
      margin: "0",
    },
    ".input":{
      backgroundColor: "#F4F5F999",
      border: "none",
    }
  },
  ".input":{
    width: "185px",
    height: "42px",
    padding: "0",
    ">*":{
      m:0,
    },
  },
  ".deleteCell":{
    display: "flex",
    justifyContent: "space-between",
  }
}

export default function FormTable() {

  const {values, setFieldValue} = useFormikContext<ICreateSubjectTopic>();
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelectAll = () => {
    setSelected(prev => values.topics.map(topic => topic.id));
  }
  
  const handleRemoveAll = () => {
    setSelected(prev => []);
  }

  useEffect(() => {
    selected.forEach(opt => {
      if(!values.topics.map(topic => topic.id).includes(opt))
        setSelected(prev => prev.filter(val => val !== opt));
    });
  }, [values.topics])
  

  const handleRemove = async () => {
    await setFieldValue("topics",values.topics.filter(topic => !selected.includes(topic.id)));
  }

  const handleCheckBox = (id:number) => {
    return (e:ChangeEvent<HTMLInputElement>) => {
      const {checked} = e.target;
      if(checked) setSelected(prev => Array.from(new Set([...prev,id])));
      else setSelected(prev => prev.filter(val => val !== id));
    }
  }

  const handleHeaderCheckBox = (e:ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    if(checked) handleSelectAll();
    else handleRemoveAll();
  }

  return (
    <TableContainer sx={styles}>
      <Table>
        <TableHead>
          <TableRow className="headingRow">
            <TableCell><Checkbox checked={selected.length !== 0 && selected.length === values.topics.length} onChange={handleHeaderCheckBox} /></TableCell>
            {selected.length === 0 ?
            <>
            <TableCell>S.No</TableCell>
            <TableCell>Chapter Name</TableCell>
            <TableCell>Description</TableCell>
            </>
            :
            <TableCell colSpan={3}>
              <Box className="deleteCell">
                <p>{selected.length} options selected</p>
                <IconButton onClick={handleRemove}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
            </TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.topics.map((promoCode, index) => (
            <TableRow key={promoCode.id}>
              <TableCell><Checkbox onChange={handleCheckBox(promoCode.id)} checked={selected.includes(promoCode.id)} /></TableCell>
              <TableCell>{index+1}</TableCell>
              <TableCell size="small">
                <FormikInput
                  name={`topics[${index}].name`}
                  placeholder=""
                  value={values.topics[index].name}
                />
              </TableCell>
              <TableCell size="small">
                <FormikInput
                  name={`topics[${index}].description`}
                  placeholder=""
                  value={values.topics[index].description}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}