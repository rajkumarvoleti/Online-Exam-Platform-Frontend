export interface IInternalLoginOptions {
  email: string,
  password: string
}

export interface IExternalLoginOptions {
  accessToken: string,
  service: "google" | "microsoft"
}

export type ILoginOptions = IInternalLoginOptions | IExternalLoginOptions;  

export interface ISignupOptions {
  firstName: string
  phoneNumber: string
  email: string
  password: string
  confirmPassword: string
}