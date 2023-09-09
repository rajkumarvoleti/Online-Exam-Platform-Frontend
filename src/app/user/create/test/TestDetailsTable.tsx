import { FormikInput } from "@/components/formik/FormikInput";
import { ITestDetailsForm } from "@/interfaces/formikInterfaces";
import { IAutoCompleteOption } from "@/interfaces/inputInterfaces";
import { IQuestionBank, ISelectedQuestionBankTopic } from "@/interfaces/otherInterfaces";
import { Autocomplete, Box, Checkbox, IconButton, Paper, SxProps, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useFormikContext } from "formik";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import TestDetailsTableRow from "./TestDetailsTableRow";
import DeleteIcon from '@mui/icons-material/Delete';


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
  },
  ".deleteCell":{
    display: "flex",
    justifyContent: "space-between",
  }
}

export default function TestDetailsTable({questionBanks}:{questionBanks:IQuestionBank[]}){

  const {values, setFieldValue} = useFormikContext<ITestDetailsForm>();
  const [selected, setSelected] = useState<number[]>([]);

  const handleCheckBox = (uuid:number) => {
    return (e:ChangeEvent<HTMLInputElement>) => {
      const {checked} = e.target;
      if(checked) setSelected(prev => Array.from(new Set([...prev,uuid])));
      else setSelected(prev => prev.filter(val => val !== uuid));
    }
  }

  const handleSelectAll = () => {
    setSelected(prev => values.questionBankTopics.map(topic => topic.uuid));
  }

  const handleRemoveAll = () => {
    setSelected(prev => []);
  }

  const handleAll = (e:ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target;
    if(checked) handleSelectAll();
    else handleRemoveAll();
  }

  const handleTotalQuestions = async () => {
    const sum = values.questionBankTopics.map(topic => topic.selectedTotalQuestions).filter(val => typeof val === "number" && val > 0).reduce((prev,curr) => prev + curr, 0);
    await setFieldValue("totalQuestions",sum);
  }

  const handleSelectedTotalQuestions = async () => {
    await Promise.all(
      values.questionBankTopics.map(async(topic,i) => {
        const sum = getTotalSelectedQuestions(i);
        await setFieldValue(`questionBankTopics[${i}].selectedTotalQuestions`,sum);
      })
    )
  }

  useEffect(() => {
    handleSelectedTotalQuestions();
    handleTotalQuestions();
  }, [values.questionBankTopics])
  
  const getTotalSelectedQuestions = (index:number) => {
    const topic = values.questionBankTopics[index];
    const easyCount = topic.selectedEasyQuestionsCount;
    const mediumCount = topic.selectedMediumQuestionsCount;
    const hardCount = topic.selectedHardQuestionsCount;
    return Math.floor([easyCount, mediumCount, hardCount].filter(val => typeof val === "number" && val > 0).reduce((prev, curr) => prev + curr, 0));
  }

  const getTotalByField = (field:keyof ISelectedQuestionBankTopic) => {
    return values.questionBankTopics.map(topic => topic[field]).filter(val => typeof val === "number" && val > 0).reduce((prev,curr) => {
      if(typeof prev === "number" && typeof curr === "number")
        return prev + Math.floor(curr);
      return prev;
    },0)
  }

  const handleRemove = async() => {
    await setFieldValue("questionBankTopics",values.questionBankTopics.filter(topic => !selected.includes(topic.uuid)));
    setSelected(prev => []);
  }
  
  return (
    <TableContainer sx={styles}>
      <h4 className="tableHeading">Define Test Level</h4>
      <Table>
        <TableHead>
          <TableRow  className="headingRow">
            {selected.length !== 0 ?
              <>
              <TableCell><Checkbox size="small" checked={selected.length !== 0 && selected.length === values.questionBankTopics.length} onChange={handleAll} /></TableCell>
              <TableCell colSpan={7}>
              <Box className="deleteCell">
                <p>{selected.length} options selected</p>
                <IconButton onClick={handleRemove}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
            </TableCell>
              </>
            :
              <>
              <TableCell><Checkbox size="small" checked={selected.length !== 0 && selected.length === values.questionBankTopics.length} onChange={handleAll} /></TableCell>
              <TableCell className="banks">Selected Question Banks</TableCell>
              <TableCell className="banks">Selected Chapters</TableCell>
              <TableCell>Actual Questions</TableCell>
              <TableCell>Choosed Questions</TableCell>
              <TableCell>Easy</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>Hard</TableCell>
              </>}
          </TableRow>
        </TableHead>
        <TableBody>
          {values.questionBankTopics.map((topic, index) => (
            <TestDetailsTableRow selected={selected} handleCheckBox={handleCheckBox} questionBanks={questionBanks} key={index} index={index} />
          ))}
          <TableRow>
              <TableCell></TableCell>
              <TableCell sx={{pl:"30px"}} className="banks" size="small">Total : {values.questionBankTopics.filter(topic => topic.id !== -1).length}</TableCell>
              <TableCell sx={{pl:"30px"}} className="banks" size="small">Total : {values.questionBankTopics.filter(topic => topic.id !== -1).length}</TableCell>
              <TableCell size="small">{getTotalByField("totalQuestions")}</TableCell>
              <TableCell align="center" size="small">{getTotalByField("selectedTotalQuestions")}</TableCell>
              <TableCell align="center" size="small">{getTotalByField("selectedHardQuestionsCount")}</TableCell>
              <TableCell align="center" size="small">{getTotalByField("selectedMediumQuestionsCount")}</TableCell >
              <TableCell align="center" size="small">{getTotalByField("selectedEasyQuestionsCount")}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}