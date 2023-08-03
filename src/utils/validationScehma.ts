import { ISignupOptions } from '@/interfaces/authInterfaces';
import { ILoginForm, ITestDetailsForm, IUpdatePasswordForm, IUserDetailsForm } from '@/interfaces/formikInterfaces';
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

const stringRequiredValidation = yup.string().required("This Field is required");

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

export const testDetailsValidationSchems: yup.ObjectSchema<ITestDetailsForm> = yup.object({
  categoryName: stringRequiredValidation,
  questionBankName: stringRequiredValidation,
  testDescription: stringRequiredValidation,
  testType: stringRequiredValidation,
})
