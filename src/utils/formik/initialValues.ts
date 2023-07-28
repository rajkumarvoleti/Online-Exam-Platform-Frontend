import { ILoginForm, ISignupForm, IUpdatePasswordForm, IUserDetailsForm } from "@/interfaces/formikInterfaces";
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