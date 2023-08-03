import { ICountry, ITimeZone } from "./otherInterfaces"

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
  categoryName: string
  testType: string
  questionBankName: string
  testDescription: string
}