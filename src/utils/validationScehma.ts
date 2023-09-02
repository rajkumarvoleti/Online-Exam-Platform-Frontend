import { ISignupOptions } from '@/interfaces/authInterfaces';
import { ILoginForm, IPromoCode, ITestDetailsForm, ITestEvaluationForm, ITestPricingForm, ITestSettingsForm, IUpdatePasswordForm, IUserDetailsForm } from '@/interfaces/formikInterfaces';
import { IQuestionBank, ISelectedQuestionBank } from '@/interfaces/otherInterfaces';
import * as yup from 'yup';
import 'yup-phone';

const phoneRegEx = /^\+(?:[0-9]){1,3}(?:[ -]?\d){10}$/;

const emailValidation = yup.string().email('Enter a valid email').required('Email is required');

const passwordValidation = yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required');

const confirmPasswordValidation = passwordValidation.oneOf([yup.ref("password")],"password and confirm password doesn't match")
const confirmPasswordValidation2 = passwordValidation.oneOf([yup.ref("newPassword")],"password and confirm password doesn't match")

const nameValidation = yup.string().min(2, 'first name should be of minimum 2 characters length').required('first name is required');

const phoneValidation = yup.string().matches(phoneRegEx,'Invalid Phone Number').required("Phone Number is required");

const checkboxValidation = yup.boolean().oneOf([true],'Please check the check box');

const currentPasswordValidation = yup.string().required("Current Password is required");

const stringRequiredValidation = yup.string().required("This Field is required").notOneOf([""],"This Field cannot be empty");

const numberRequiredValidation = yup.number().required("This Field is required").integer("Invalid number").moreThan(-1,"Please use a positive value");

const positiveIntegerRequiredValidation = yup.number().required("This Field is required").moreThan(-1,"Please use a positive value");

const promoCodeSchema = yup.object().shape({
  code: stringRequiredValidation,
  offer: yup.number().required('Offer value is required').min(0, 'Invalid value').max(100,"Invalid value"),
});

const testTypeSchema = yup
.mixed<'private' | 'open'>()
.oneOf(['private', 'open'], 'Invalid test type')
.required('Test type is required');

const getQuestionBankValidation = (bank:IQuestionBank) => yup.object().shape({
  easyQuestionsCount: numberRequiredValidation,
  mediumQuestionsCount: numberRequiredValidation,
  hardQuestionsCount: numberRequiredValidation,
  selectedEasyQuestionsCount: numberRequiredValidation.max(bank.easyQuestionsCount,"Insufficient Questions"),
  selectedMediumQuestionsCount: numberRequiredValidation.max(bank.mediumQuestionsCount,"Insufficient Questions"),
  selectedHardQuestionsCount: numberRequiredValidation.max(bank.hardQuestionsCount,"Insufficient Questions"),
  totalQuestions: numberRequiredValidation,
  id: numberRequiredValidation,
  name: stringRequiredValidation,
})

const questionBanksValidation = yup.array().of(
  yup.lazy((value,option) => {
    return getQuestionBankValidation(value);
  })
)

export const loginValidatonSchema: yup.ObjectSchema<ILoginForm> = yup.object({
  email:emailValidation,
  password:passwordValidation
})

export const signupValidationSchema: yup.ObjectSchema<ISignupOptions> = yup.object({
  firstName: nameValidation,
  email: emailValidation,
  phoneNumber: phoneValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
  checkbox: checkboxValidation
})

export const updatePasswordValidationSchema: yup.ObjectSchema<IUpdatePasswordForm> = yup.object({
  currentPassword:currentPasswordValidation,
  newPassword: passwordValidation,
  confirmNewPassword: confirmPasswordValidation2,
})

export const testDetailsValidationSchema = yup.object({
  testName: stringRequiredValidation,
  testDescription: stringRequiredValidation,
  totalQuestions: numberRequiredValidation,
  questionBanks: questionBanksValidation,
})

export const testPricingValidationSchema = yup.object({
  testType: testTypeSchema,
  price: numberRequiredValidation,
  promoCodes: yup.array().of(promoCodeSchema),
})

export const testSettingsValidationScehma: yup.ObjectSchema<ITestSettingsForm> = yup.object({
  testDateAvailability: yup.string().oneOf(["specific","always"]).required("This field is required"),
  testTimeAvailability: yup.string().oneOf(["specific","always"]).required("This field is required"),
  testDurationAvailability: yup.string().oneOf(["specific","always"]).required("This field is required"),
  testStartDate: stringRequiredValidation.notOneOf(["Invalid Date"], "Invalid Date"),
  testEndDate: stringRequiredValidation.notOneOf(["Invalid Date"], "Invalid Date"),
  testStartTime: stringRequiredValidation.notOneOf(["Invalid Date"], "Invalid Time"),
  testEndTime: stringRequiredValidation.notOneOf(["Invalid Date"], "Invalid Time"),
  testDuration: numberRequiredValidation,
  totalMarks: numberRequiredValidation,
  totalQuestions: numberRequiredValidation,
  negativeMarks: positiveIntegerRequiredValidation,
  passPercentage: numberRequiredValidation.lessThan(101,"Please enter a valid value"),
  resultFormat: stringRequiredValidation,
  testDeclaration: stringRequiredValidation,
})
