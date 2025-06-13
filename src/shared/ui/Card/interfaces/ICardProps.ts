import { ReactNode } from "react";

export interface ICardProps {
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  header?: ReactNode | string;
  children?: ReactNode;
  footer?: ReactNode | string;
}
