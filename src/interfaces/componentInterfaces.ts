import { INextImage } from "./imageInterfaces";

export interface IDrawerListItem {
  Icon:INextImage,
  Text:string,
  Index: string,
  href?: string
  Items?: IDrawerListItem[],
}