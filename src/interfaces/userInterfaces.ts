export interface IUser {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  password?: string,
  phoneNumber?: string,
  createdAt?: string,
  updatedAt?: string,
  voucherCode?: string,
  country?: string
  timezone?: string
  tagline?: string
  bio?: string
}