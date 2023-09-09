import { FormikInput } from "@/components/formik/FormikInput";
import { ITestDetailsForm } from "@/interfaces/formikInterfaces";
import { IAutoCompleteOption } from "@/interfaces/inputInterfaces";
import { IQuestionBank, ISelectedQuestionBankTopic } from "@/interfaces/otherInterfaces";
import { selectedTopicInitialValues } from "@/utils/formik/initialValues";
import { Autocomplete, Box, Checkbox, SxProps, TableCell, TableRow, TextField } from "@mui/material"
import { FormikErrors, useFormikContext } from "formik";
import { ChangeEvent, useEffect, useState } from "react";

const styles:SxProps = {
  ".autoCompleteCell":{
    p: "10px ",
    width: "200px",
  },
  ".autoComplete":{
  },
  ".error": {
    color: "red",
    pl: "10px",
    fontSize: "14px",
    padding: "0",
    maxWidth:"200px",
  },
}

export default function TestDetailsTableRow({selected, index, questionBanks, handleCheckBox}:{index:number, questionBanks:IQuestionBank[], handleCheckBox: (uuid:number) => (e: ChangeEvent<HTMLInputElement>) => void, selected:number[]}) {

  const [questionBankOptions, setQuestionBankOptions] = useState<IAutoCompleteOption[]>([]);
  const [topicOptions, setTopicOptions] = useState<IAutoCompleteOption[]>([]);
  const [selectedBank, setSelectedBank] = useState<IAutoCompleteOption | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<IAutoCompleteOption | null>(null);
  const {values, setFieldValue, errors, touched} = useFormikContext<ITestDetailsForm>();
  const topic:ISelectedQuestionBankTopic = values.questionBankTopics[index];

  const handleRowData = async (data:ISelectedQuestionBankTopic) => {
    await setFieldValue(`questionBankTopics[${index}]`,data);
  }

  useEffect(() => {
    const options:IAutoCompleteOption[] = questionBanks.map(bank =>({id: JSON.stringify(bank.id), label: bank.name}));
    setQuestionBankOptions(prev => options);
  }, [questionBanks]);

  useEffect(() => {
    setSelectedTopic(prev => null);
    setTopicOptions(prev => []);

    if(!selectedBank)
      return;

    const newTopics = questionBanks.find(bank => bank.id === parseInt(selectedBank.id,10));
    if(!newTopics) return;
    const newTopicOptions:IAutoCompleteOption[] = newTopics.topics.map(topic => ({
      id: JSON.stringify(topic.id),
      label: topic.name,
    })); 
    const presentTopicIds = values.questionBankTopics.map(topic => topic.id); 
    const filteredOptions = newTopicOptions.filter(option => !presentTopicIds.includes(parseInt(option.id,10)));

    setTopicOptions(prev => filteredOptions);
  }, [selectedBank])

  useEffect(() => {
    const handleData = async(data:ISelectedQuestionBankTopic) => await handleRowData(data);
    if(!selectedTopic || !selectedBank)
      handleData({...selectedTopicInitialValues,uuid: topic.uuid});
    else{
      const newData = questionBanks.find(bank => bank.id === parseInt(selectedBank.id,10))?.topics.find(topic => topic.id === parseInt(selectedTopic.id,10)); 
      if(!newData)
        return;
      handleData({...newData,uuid:topic.uuid});
    }
  }, [selectedTopic])

  useEffect(() => {
    if(!selectedBank)
      return;
    const newTopics = questionBanks.find(bank => bank.id === parseInt(selectedBank.id,10));
    if(!newTopics) return;
    const newTopicOptions:IAutoCompleteOption[] = newTopics.topics.map(topic => ({
      id: JSON.stringify(topic.id),
      label: topic.name,
    })); 
    const presentTopicIds = values.questionBankTopics.map(topic => topic.id); 
    const filteredOptions = newTopicOptions.filter(option => !presentTopicIds.includes(parseInt(option.id,10)));

    setTopicOptions(prev => filteredOptions);

  }, [values.questionBankTopics])

  const handleQuestionBankSelect = (event: React.ChangeEvent<{}>, newValue: IAutoCompleteOption | null) => {
      setSelectedBank(newValue);
    }

  const handleTopicSelect = (event: React.ChangeEvent<{}>, newValue: IAutoCompleteOption | null) => {
    console.log(newValue);
    setSelectedTopic(newValue);
  }

  const chapterTouched = touched.questionBankTopics && touched.questionBankTopics[index]?.id;
  const chapterError = chapterTouched && values.questionBankTopics[index].id === -1;

  return (
    <TableRow sx={styles} key={index}>
      <TableCell><Checkbox size="small" onChange={handleCheckBox(topic.uuid)} checked={selected.includes(topic.uuid)} /></TableCell>
      <TableCell className="autoCompleteCell" sx={{pl:"30px"}} size="small">
        <Autocomplete
          className="autoComplete"
          size="medium"
          onChange={handleQuestionBankSelect}
          value={selectedBank}
          options={questionBankOptions}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option.label}
              </li>
            )
          }}
          renderInput={(params) => <TextField {...params} placeholder="Select" />}
        />
      </TableCell>
      <TableCell className="autoCompleteCell" sx={{pl:"30px"}} size="small">
      <Autocomplete
        className="autoComplete"
          size="medium"
          onChange={handleTopicSelect}
          value={selectedTopic}
          options={topicOptions}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option.label}
              </li>
            )
          }}
          renderInput={(params) => <TextField {...params} placeholder="Select" />}
        />
        {chapterError && <p className="error">This field is required</p>}

      </TableCell>
      <TableCell className="questionsCount" size="small">
        {topic.id !== -1 && <Box className="complexityCount center">
          {topic.totalQuestions}
          <p className="hard">({topic.hardQuestionsCount},</p>
          <p className="medium">{topic.mediumQuestionsCount},</p>
          <p className="easy">{topic.easyQuestionsCount})</p>
        </Box>}
        </TableCell>
      <TableCell size="small">
        {topic.id !== -1 && <FormikInput
          disabled
          type="number"
          name={`questionBankTopics[${index}].selectedTotalQuestions`}
          placeholder=""
          value={values.questionBankTopics[index].selectedTotalQuestions}
        />}
      </TableCell>
      <TableCell align="center" size="small">
        {topic.id !== -1 && <FormikInput
          type="number"
          name={`questionBankTopics[${index}].selectedHardQuestionsCount`}
          placeholder=""
          value={values.questionBankTopics[index].selectedHardQuestionsCount}
        />}
      </TableCell>
      <TableCell align="center" size="small">
        {topic.id !== -1 && <FormikInput
          type="number"
          name={`questionBankTopics[${index}].selectedMediumQuestionsCount`}
          placeholder=""
          value={values.questionBankTopics[index].selectedMediumQuestionsCount}
        />}
      </TableCell >
      <TableCell align="center" size="small">
        {topic.id !== -1 && <FormikInput
          type="number"
          name={`questionBankTopics[${index}].selectedEasyQuestionsCount`}
          placeholder=""
          value={values.questionBankTopics[index].selectedEasyQuestionsCount}
        />}
      </TableCell>
    </TableRow>
  )
}