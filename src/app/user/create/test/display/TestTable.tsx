import { IExam } from "@/interfaces/examInterfaces";
import { Box, Checkbox, IconButton, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useCreateTest from "@/hooks/useCreateTest";
import { useRouter } from "next-nprogress-bar";

const styles:SxProps = {
  ".MuiTableCell-root":{
    border: "1px solid #B9B9B9",
    height: "50px",
    p: "0 15px",
  },
  ".MuiTableHead-root":{
    backgroundColor: "#F4F4FB"
  },
  ".MuiCheckbox-root": {
    color: "#0B5FFF"
  },
  ".deleteCell":{
    display: "flex",
    justifyContent: "space-between",
  },
  ".checkBoxCell":{
    width: "50px",
  }
} 

export default function TestTable({exams}:{exams:IExam[]}) {

  const [selected, setSelected] = useState<(number|undefined)[]>([]);
  const {handleDelete} = useCreateTest();
  const router = useRouter();

  useEffect(() => {
    setSelected([]);
  }, [exams])
  

  const handleSelectAll = () => {
    setSelected(prev => exams.map(exam => exam.id));
  }
  
  const handleRemoveAll = () => {
    setSelected(prev => []);
  }

  const handleHeaderCheckBox = (e:ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    if(checked) handleSelectAll();
    else handleRemoveAll();
  }

  const handleCheckBox = (id:number) => {
    return (e:ChangeEvent<HTMLInputElement>) => {
      const {checked} = e.target;
      if(checked) setSelected(prev => Array.from(new Set([...prev,id])));
      else setSelected(prev => prev.filter(val => val !== id));
    }
  }

  const handleRemove = () => {
    const filteredArray: number[] = selected.filter((value): value is number => typeof value === 'number');
    handleDelete(filteredArray);
  }

  const handleEdit = () => {
    router.push(`/user/edit/test/${selected[0]}`);
  }

  return (
    <TableContainer>
    <Table sx={styles}>
        <TableHead>
          <TableRow>
            {selected.length === 0 ?
            <>
            <TableCell className="checkBoxCell"><Checkbox checked={selected.length !== 0 && selected.length === exams.length} onChange={handleHeaderCheckBox} color="primary" size="small" /></TableCell>
            <TableCell>Test Name</TableCell>
            <TableCell>Test Description</TableCell>
            <TableCell>Total Questions In Test</TableCell>
            <TableCell>Test Status</TableCell>
            <TableCell>No of attempts In Test</TableCell>
            <TableCell>Total Students Attempt</TableCell>
            </> :
            <>
            <TableCell className="checkBoxCell"><Checkbox checked={selected.length !== 0 && selected.length === exams.length} onChange={handleHeaderCheckBox} color="primary" size="small" /></TableCell>
            <TableCell colSpan={7}>
              <Box className="deleteCell">
                <p>{selected.length} options selected</p>
                {selected.length === 1 && <IconButton onClick={handleEdit}>
                  <EditIcon color="primary" />
                </IconButton>}
                <IconButton onClick={handleRemove}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
            </TableCell>
            </>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {exams.map(exam => (
            (exam.id && <TableRow key={exam.id}>
                <TableCell className="checkBoxCell"><Checkbox checked={selected.includes(exam.id)} onChange={handleCheckBox(exam.id)} color="primary" size="small" /></TableCell>
                <TableCell>{exam.name}</TableCell>
                <TableCell>{exam.description}</TableCell>
                <TableCell>{exam.totalQuestions}</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>)
          ))}
        </TableBody>
    </Table>
    </TableContainer>
  )
}