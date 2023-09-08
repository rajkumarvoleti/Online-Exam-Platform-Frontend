import { IQuestionAndAnswer } from "@/interfaces/examInterfaces";
import { ICreateQuestions, ICreateSubjectTopic, ILoginForm, ISignupForm, ITestDetailsForm, ITestEvaluationForm, ITestPricingForm, ITestSettingsForm, IUpdatePasswordForm, IUserDetailsForm } from "@/interfaces/formikInterfaces";
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
    bio: user.bio || "",
    totalExperience: user.totalExperience || 0,
    experienceIn: user.experienceIn || "",
    qualification: user.qualification || "",
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
  testDurationHours: 0,
  testDurationMinutes: 0,
  testDuration: 0,
  totalMarks: 0,
  marksPerQuestion: 0,
  note: "",
  totalQuestions: 0,
  negativeMarks: 0,
  passPercentage: 0,
  resultFormat: "marks",
  testDeclaration: "immediatelyAfterExamCompletion",
}

export const createSubjectTopicInitialValues:ICreateSubjectTopic = {
  name: "",
  description: "",
  topics: [{
    id: Math.random(),
    name: "",
    description: "",
  }]
}

export const getCreateQuestionsInitialValues = (id:number):ICreateQuestions => {
  return {
    questions :[
      {
        topicId: id,
        questionId: Math.random(),
        question: "",
        complexity: "easy",
        answer: {
          description: "",
          explanation: "",
          options: [{
            description: "",
            isCorrect: true,
          }],
          type: "subjective"
        }
      }
  ]}
}