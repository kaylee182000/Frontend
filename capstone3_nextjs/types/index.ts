import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturesProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
