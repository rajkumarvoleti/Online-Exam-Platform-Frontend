import { FormikInput } from "@/components/formik/FormikInput";
import { IPromoCode, ITestPricingForm } from "@/interfaces/formikInterfaces";
import { Box, Button, Checkbox, IconButton, OutlinedInput, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useFormikContext } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { setTimeout } from "timers/promises";

const styles:SxProps = {
  border: "1px solid #B9B9B9",
  borderRadius: "10px",
  width: "640px",
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
    height:"68px",
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
    width: "100px !important",
    padding: "0",
    ">*":{
      m:0,
    },
  },
  ".outlined":{
    width: "100px",
    height: "32px",
  },
  ".deleteCell":{
    display: "flex",
    justifyContent: "space-between",
  }
}

export default function PromoCodesTable({remove}:{remove:(id:number) => void}){

  const {values, setFieldValue} = useFormikContext<ITestPricingForm>();
  const [selected, setSelected] = useState<number[]>([]);

  const getFinalOffer = (promoCode:IPromoCode) => {
    if(promoCode.offer < 0 || promoCode.offer > 100)
      return 0;
    return values.price * ((100-promoCode.offer)/100);
  }
  
  const handleSelectAll = () => {
    setSelected(prev => values.promoCodes.map(code => code.id));
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

  useEffect(() => {
    selected.forEach(opt => {
      if(!values.promoCodes.map(code => code.id).includes(opt))
        setSelected(prev => prev.filter(val => val !== opt));
    });
  }, [values.promoCodes])
  

  const handleRemove = async () => {
    await setFieldValue("promoCodes",values.promoCodes.filter(code => !selected.includes(code.id)));
  }

  return (
    <TableContainer sx={styles}>
      <Table>
        <TableHead>
          <TableRow className="headingRow">
            <TableCell><Checkbox checked={selected.length !== 0 && selected.length === values.promoCodes.length} onChange={handleHeaderCheckBox} /></TableCell>
            {selected.length === 0 ?
            <>
            <TableCell>Promo Code</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Final Price</TableCell>
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
          {values.promoCodes.map((promoCode, index) => (
            <TableRow key={promoCode.id}>
              <TableCell><Checkbox onChange={handleCheckBox(promoCode.id)} checked={selected.includes(promoCode.id)} /></TableCell>
              <TableCell size="small">
                <FormikInput
                  name={`promoCodes[${index}].code`}
                  placeholder=""
                  value={values.promoCodes[index].code}
                />
              </TableCell>
              <TableCell size="small">
                <FormikInput
                  type="number"
                  name={`promoCodes[${index}].offer`}
                  placeholder=""
                  value={values.promoCodes[index].offer}
                />
              </TableCell>
              <TableCell size="small">
                <OutlinedInput className="outlined" disabled value={getFinalOffer(values.promoCodes[index])} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}