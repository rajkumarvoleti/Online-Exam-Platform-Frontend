import { IUser } from "./userInterfaces";

export interface ISession {
  isAuthenticated: boolean,
  user: IUser | null
}