import { INextImage } from "./imageInterfaces";
import { ChangeEventHandler, FocusEventHandler, MouseEventHandler, ReactNode, RefObject } from "react";

export interface IAutoCompleteOption {
  id: string,
  label: string
}

export interface IInputProps {
  disabled?: boolean;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "number" | "phoneNumber" | "checkbox" | "autocomplete" | "multiSelect";
  name: string;
  value?: string | number | boolean | string[];
  autoCompleteOption?:  IAutoCompleteOption;
  desc?: string;
  options?: IAutoCompleteOption[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onMouseEnter?: MouseEventHandler<HTMLInputElement>;
  onMouseLeave?: MouseEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  error?: string;
  ref?: RefObject<HTMLInputElement>;
  hideErrorMessage?: boolean;
  autoCompleteOff?: boolean;
  InputImage?: INextImage,
  push?: (id: number) => void;
  remove?: (id: number) => void;
};