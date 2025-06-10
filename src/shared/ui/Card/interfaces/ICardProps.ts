import { ReactNode } from "react";

export interface ICardProps {
  className?: string;
  header?: ReactNode | string;
  children: ReactNode;
  footer?: ReactNode | string;
}
