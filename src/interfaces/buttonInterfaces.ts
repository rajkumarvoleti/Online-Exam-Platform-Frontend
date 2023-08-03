export interface IButtonProps {
  text:string,
  type?:string,
  handleClick?:() => void
}

export type INumberButtonType = "responded" | "notVisited" | "markedForReview" | "notResponded" | "respondedAndMarked"

export type INumberButtonSize = "small" | "medium"