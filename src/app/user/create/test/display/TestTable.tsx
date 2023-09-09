import { Checkbox, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

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
  }
} 

export default function TestTable() {
  return (
    <TableContainer>
    <Table sx={styles}>
        <TableHead>
          <TableRow>
            <TableCell><Checkbox color="primary" size="small" /></TableCell>
            <TableCell>Test Name</TableCell>
            <TableCell>Test Description</TableCell>
            <TableCell>Total Questions In Test</TableCell>
            <TableCell>Test Status</TableCell>
            <TableCell>No of attempts In Test</TableCell>
            <TableCell>Total Students Attempt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell><Checkbox color="primary" size="small" /></TableCell>
            <TableCell>RPA -1</TableCell>
            <TableCell>Observation</TableCell>
            <TableCell>30</TableCell>
            <TableCell>Approved</TableCell>
            <TableCell>05</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Checkbox color="primary" size="small" /></TableCell>
            <TableCell>RPA -1</TableCell>
            <TableCell>Observation</TableCell>
            <TableCell>30</TableCell>
            <TableCell>Approved</TableCell>
            <TableCell>05</TableCell>
            <TableCell>100</TableCell>
          </TableRow>
        </TableBody>
    </Table>
    </TableContainer>
  )
}