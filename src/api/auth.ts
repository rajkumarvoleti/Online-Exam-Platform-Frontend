import { ISignupForm } from "@/interfaces/formikInterfaces";
import { request } from "."
import { IExternalLoginOptions, IInternalLoginOptions } from "@/interfaces/authInterfaces";
import { IUser } from "@/interfaces/userInterfaces";

export const internalLoginRequest = (loginData:IInternalLoginOptions) => {
  return request({url: '/users/signin', method: 'post', data: loginData});
}

export const signupRequest = ({signupOptions}:{signupOptions:ISignupForm}) => {
  return request({url: '/users/signup', method: 'post', data: signupOptions});
}

export const externalLoginRequest = (loginData:IExternalLoginOptions) => {
  return request({url: '/users/externalSignin', method: 'post', data: loginData}); 
}

export const logoutRequest = () => {
  return request({url: '/users/signout', method: 'delete', data: {}}); 
}

export const updateUserRequest = (userData:IUser) => {
  return request({url: "/users/update", method: 'post', data: userData})
}

export const updatePasswordRequest = ({currentPassword, newPassword}:{currentPassword: string, newPassword: string}) => {
  return request({url: "/users/updatePassword", method: 'post', data: {currentPassword, newPassword}})
}