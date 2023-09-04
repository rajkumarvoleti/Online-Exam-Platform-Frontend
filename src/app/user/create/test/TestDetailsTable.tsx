import { FormikInput } from "@/components/formik/FormikInput";
import { ITestDetailsForm } from "@/interfaces/formikInterfaces";
import { ISelectedQuestionBank } from "@/interfaces/otherInterfaces";
import { Box, Paper, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect } from "react";

const styles:SxProps = {
  ".complexityCount":{
    display: "flex",
    gap: "5px",
  },
  ".customInput":{
    '& fieldset': { border: 'none' } ,
    width: "80px",
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
    width: "80px !important",
    padding: "0",
  },
  ".headingRow":{
    ".MuiTableCell-root":{
      color: "gray",
      textAlign: "center",
    }
  },
  ".MuiTableCell-root":{
    fontSize: "16px",
    color: "#000",
    height: "50px",
    width:"100px",
    border: "1px solid #B9B9B9",
    textAlign: "center",
    verticalAlign: "middle",
    position: "relative",
    ".customInput":{
      position: "relative",
      left: "20%",
    }
  },
  ".banks":{
    width:"150px",
    textAlign: "left",
  }
}

export default function TestDetailsTable(){

  const {values, setFieldValue} = useFormikContext<ITestDetailsForm>();

  const handleTotalQuestions = async () => {
    const sum = values.questionBanks.map(bank => bank.selectedTotalQuestions).filter(val => typeof val === "number" && val > 0).reduce((prev,curr) => prev + curr, 0);
    await setFieldValue("totalQuestions",sum);
  }

  const handleSelectedTotalQuestions = async () => {
    await Promise.all(
      values.questionBanks.map(async(bank,i) => {
        const sum = getTotalSelectedQuestions(i);
        await setFieldValue(`questionBanks[${i}].selectedTotalQuestions`,sum);
      })
    )
  }

  useEffect(() => {
    handleSelectedTotalQuestions();
    handleTotalQuestions();
  }, [values.questionBanks])
  
  

  const getTotalSelectedQuestions = (index:number) => {
    const bank = values.questionBanks[index];
    const easyCount = bank.selectedEasyQuestionsCount;
    const mediumCount = bank.selectedMediumQuestionsCount;
    const hardCount = bank.selectedHardQuestionsCount;
    return Math.floor([easyCount, mediumCount, hardCount].filter(val => typeof val === "number" && val > 0).reduce((prev, curr) => prev + curr, 0));
  }

  const getTotalByField = (field:keyof ISelectedQuestionBank) => {
    return values.questionBanks.map(bank => bank[field]).filter(val => typeof val === "number" && val > 0).reduce((prev,curr) => {
      if(typeof prev === "number" && typeof curr === "number")
        return prev + Math.floor(curr);
      return prev;
    },0)
  }
  
  return (
    <TableContainer sx={styles}>
      <h4 className="tableHeading">Define Test Level</h4>
      <Table>
        <TableHead>
          <TableRow  className="headingRow">
            <TableCell className="banks">Selected Question Banks</TableCell>
            <TableCell>Actual Questions</TableCell>
            <TableCell>Choosed Questions</TableCell>
            <TableCell>Easy</TableCell>
            <TableCell>Medium</TableCell>
            <TableCell>Hard</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {values.questionBanks.map((questionBank, index) => (
            <TableRow key={questionBank.id}>
              <TableCell sx={{pl:"30px"}} className="banks" size="small">{questionBank.name}</TableCell>
              <TableCell className="questionsCount" size="small">
                <Box className="complexityCount center">
                  {questionBank.totalQuestions}
                  <p className="easy">({questionBank.easyQuestionsCount},</p>
                  <p className="medium">{questionBank.mediumQuestionsCount},</p>
                  <p className="hard">{questionBank.hardQuestionsCount})</p>
                </Box>
                </TableCell>
              <TableCell size="small">
                <FormikInput
                  disabled
                  type="number"
                  name={`questionBanks[${index}].selectedTotalQuestions`}
                  placeholder=""
                  value={values.questionBanks[index].selectedTotalQuestions}
                />
              </TableCell>
              <TableCell align="center" size="small">
                <FormikInput
                  type="number"
                  name={`questionBanks[${index}].selectedEasyQuestionsCount`}
                  placeholder=""
                  value={values.questionBanks[index].selectedEasyQuestionsCount}
                />
              </TableCell>
              <TableCell align="center" size="small">
                <FormikInput
                  type="number"
                  name={`questionBanks[${index}].selectedMediumQuestionsCount`}
                  placeholder=""
                  value={values.questionBanks[index].selectedMediumQuestionsCount}
                />
              </TableCell >
              <TableCell align="center" size="small">
                <FormikInput
                  type="number"
                  name={`questionBanks[${index}].selectedHardQuestionsCount`}
                  placeholder=""
                  value={values.questionBanks[index].selectedHardQuestionsCount}
                />
              </TableCell>
            </TableRow>
          ))}
          <TableRow key={"total"}>
              <TableCell sx={{pl:"30px"}} className="banks" size="small">Total : {values.questionBanks.length}</TableCell>
              <TableCell size="small">{getTotalByField("totalQuestions")}</TableCell>
              <TableCell align="center" size="small">{getTotalByField("selectedTotalQuestions")}</TableCell>
              <TableCell align="center" size="small">{getTotalByField("selectedEasyQuestionsCount")}</TableCell>
              <TableCell align="center" size="small">{getTotalByField("selectedMediumQuestionsCount")}</TableCell >
              <TableCell align="center" size="small">{getTotalByField("selectedHardQuestionsCount")}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}