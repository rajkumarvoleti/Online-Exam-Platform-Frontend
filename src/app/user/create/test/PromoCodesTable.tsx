import { FormikInput } from "@/components/formik/FormikInput";
import { IPromoCode, ITestPricingForm } from "@/interfaces/formikInterfaces";
import { Button, OutlinedInput, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect } from "react";

const styles:SxProps = {
  border: "1px solid #B9B9B9",
  borderRadius: "10px",
  width: "640px",
  ".MuiTableCell-root":{
    color: "#5B5B5B",
    fontSize: "16px",
    textAlign: "center",
  },
  ".headingRow":{
    backgroundColor: "#F5F4F999",
    ".MuiTableCell-root":{
      color: "#5B5B5B",
      fontSize: "16px",
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
}

export default function PromoCodesTable({remove}:{remove:(id:number) => void}){

  const {values} = useFormikContext<ITestPricingForm>();

  const getFinalOffer = (promoCode:IPromoCode) => {
    if(promoCode.offer < 0 || promoCode.offer > 100)
      return 0;
    return values.price * ((100-promoCode.offer)/100);
  }

  return (
    <TableContainer sx={styles}>
      <Table>
        <TableHead>
          <TableRow  className="headingRow">
            <TableCell>Promo Code</TableCell>
            <TableCell>Discount</TableCell>
            <TableCell>Final Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.promoCodes.map((promoCode, index) => (
            <TableRow key={promoCode.id}>
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
              <TableCell>
                <Button onClick={() => remove(values.promoCodes[index].id)}>Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}