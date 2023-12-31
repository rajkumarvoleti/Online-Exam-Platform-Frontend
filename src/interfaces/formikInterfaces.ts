import { IQuestionAndAnswer } from "./examInterfaces"
import { ICountry, IQuestionBank, ISelectedQuestionBankTopic, ITimeZone } from "./otherInterfaces"

export interface ILoginForm {
  email: string,
  password: string
}

export interface ISignupForm {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  password: string
  confirmPassword: string
  voucherCode: string
  checkbox: boolean
}

export interface IUserDetailsForm {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  country: ICountry
  timezone: ITimeZone
  tagline: string
  bio: string
}
export interface IUpdatePasswordForm {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}

export interface ITestDetailsForm {
  testName: string
  testDescription: string
  totalQuestions: number
  questionBankTopics: ISelectedQuestionBankTopic[],
}

export interface ITestEvaluationForm {
  totalQuestions: number,
  totalMarks: number,
  marksPerQuestion: number,
  passPercentage: number,
  negativeMarks: number,
  note: string,
}

export interface ITestSettingsForm extends ITestEvaluationForm {
  testDateAvailability: "specific" | "always",
  testTimeAvailability: "specific" | "always",
  testDurationAvailability: "specific" | "always",
  testStartDate: string,
  testEndDate:string,
  testStartTime: string,
  testEndTime: string,
  testDurationHours: number,
  testDurationMinutes: number,
  testDuration: number,
  resultFormat: string,
  testDeclaration: string,
}

export interface IPromoCode {
  id: number,
  code: string,
  offer: number
}

export type IPricingType = "private" | "open" 

export interface ITestPricingForm {
  testType: IPricingType,
  price: number,
  promoCodes: IPromoCode[]
}

export interface ICreateTestData {
  testDetails:ITestDetailsForm,
  testSettings:ITestSettingsForm,
  pricing:ITestPricingForm,
}

export interface ICreateTopic {
  id: number,
  name: string,
  description: string,
}

export interface ICreateSubjectTopic {
  name: string,
  description: string,
  topics: ICreateTopic[],
}

export interface ICreateQuestions {
  questions: IQuestionAndAnswer[],
}