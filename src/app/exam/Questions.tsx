import { Button, FormControl } from "@mui/material";
import Question from "./Question";
import { IQuestion } from "./page";

export default function Questions({questions}:{questions:[IQuestion] | []}){

  const handleSubmit = (e:any) => {
    e.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <FormControl>
        {questions.map(question => <Question questionData={question} key={question._id}/>)}
      </FormControl>
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  )
}