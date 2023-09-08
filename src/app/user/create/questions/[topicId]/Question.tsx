import { Box, Card, SxProps } from "@mui/material";
import Header from "./Header";
import { useFormikContext, FormikErrors } from "formik";
import { ICreateQuestions } from "@/interfaces/formikInterfaces";
import WordComponent from "@/components/WordComponent";
import AnswerComponent from "./AnswerComponent";
import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";

const styles:SxProps = {
  border: "1px solid #B9B9B9",
  borderRadius: "8px",
  margin: "30px",
  padding: "10px 40px",
  ".error":{
    color: "red",
  }
}


export default function Question({index}:{index:number}) {

  const {setFieldValue, values, errors, touched} = useFormikContext<ICreateQuestions>();

  const handleData = async (data:string) => {
    await setFieldValue(`questions[${index}].question`,data);
  }

  const questionError = errors.questions && touched.questions && touched.questions[index]?.question && (errors.questions[index] as FormikErrors<IQuestionAndAnswer>);

  return (
    <Box id={`question${index}`} sx={styles}>
      <Header index={index} />
      <WordComponent value={values.questions[index].question} handleData={handleData} />
      <p className="error"> {questionError && questionError.question}</p>
      <AnswerComponent index={index} />
    </Box>
  )
}

// <Card sx={styles}>
//   <Header topic={data?.topic} type={type} setType={setType} />
//     <WordComponent value={""} handleData={handleQuestion} />
//     <AnswerComponent type={type} />
//   <Footer topicId={topicId} />
// </Card>