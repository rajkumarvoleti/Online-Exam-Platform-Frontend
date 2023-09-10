export interface ICountry {
  id: string,
  label: string 
}

export interface ITimeZone {
  id: string,
  label: string
}

export interface IQuestionBankTopic {
  id: number,
  name: string,
  totalQuestions: number,
  easyQuestionsCount: number,
  mediumQuestionsCount: number,
  hardQuestionsCount: number,
}
export interface ISelectedQuestionBankTopic extends IQuestionBankTopic {
  uuid: number,
  selectedTotalQuestions: number
  selectedEasyQuestionsCount: number
  selectedMediumQuestionsCount: number
  selectedHardQuestionsCount: number
}

export interface IQuestionBank {
  id: number,
  name: string,
  topics: ISelectedQuestionBankTopic[],
}
