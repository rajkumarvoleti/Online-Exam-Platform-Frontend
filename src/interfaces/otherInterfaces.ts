
export interface ICountry {
  id: string,
  label: string 
}

export interface ITimeZone {
  id: string,
  label: string
}

export interface IQuestionBank {
  id: number,
  name: string,
  totalQuestions: number,
  easyQuestionsCount: number,
  mediumQuestionsCount: number,
  hardQuestionsCount: number,
}

export interface ISelectedQuestionBank extends IQuestionBank {
  selectedTotalQuestions: number
  selectedEasyQuestionsCount: number
  selectedMediumQuestionsCount: number
  selectedHardQuestionsCount: number
}