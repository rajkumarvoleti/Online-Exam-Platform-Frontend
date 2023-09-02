import { ILoginForm, ISignupForm, ITestDetailsForm, ITestEvaluationForm, ITestPricingForm, ITestSettingsForm, IUpdatePasswordForm, IUserDetailsForm } from "@/interfaces/formikInterfaces";
import { IUser } from "@/interfaces/userInterfaces";

export const loginInitialValues:ILoginForm = {
  email: "",
  password: ""
}

export const signupInitialValues:ISignupForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  voucherCode: "",
  checkbox: false
}

export const getUserDetails = (user:IUser) => {
  return {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    phoneNumber: user.phoneNumber || "",
    country: {
      id: "",
      label: user.country || "",
    },
      timezone: {
      id: "",
      label: user.timezone || "",
    },
    tagline: user.tagline || "",
    bio: user.bio || ""
  }
}

export const updatePasswordInitialValues:IUpdatePasswordForm = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
}

export const testDetailsInitialValues:ITestDetailsForm = {
  testName: "",
  testDescription: "",
  totalQuestions: 0,
  questionBanks: [],

}

export const testPricingInitialValues:ITestPricingForm = {
  price: 0,
  testType: "private",
  promoCodes: [],
}

export const testSettingsInitialValues:ITestSettingsForm = {
  testDateAvailability: "specific",
  testTimeAvailability: "specific",
  testDurationAvailability: "specific",
  testStartDate: "",
  testEndDate: "",
  testStartTime: "",
  testEndTime: "",
  testDuration: 0,
  totalMarks: 0,
  totalQuestions: 0,
  negativeMarks: 0,
  passPercentage: 0,
  resultFormat: "marks",
  testDeclaration: "immediatelyAfterExamCompletion",
}
