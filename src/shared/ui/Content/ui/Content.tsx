import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Content.module.scss";
import { IContainerProps } from "@/shared/ui/Content/Interfaces/IContainerProps";

const Content = ({ children, customClass }: IContainerProps): ReactElement => (
  <div className={clsx(styles.root, customClass)}>{children}</div>
);
export default Content;
