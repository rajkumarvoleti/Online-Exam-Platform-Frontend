import { ICountry, IQuestionBank, ISelectedQuestionBank, ITimeZone } from "./otherInterfaces"

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
  testId: string
  testDescription: string
  totalQuestions: number
  questionBanks: ISelectedQuestionBank[],
}

export interface ITestEvaluationForm {
  totalQuestions: number,
  totalMarks: number,
  passPercentage: number,
  negativeMarks: number,
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