import { ReactElement } from "react";
import { IContainerProps } from "@/shared/ui/Container/Interfaces/IContainerProps";
import clsx from "clsx";
import styles from "./Container.module.scss";

const Container = ({ children, customClass }: IContainerProps): ReactElement => (
  <div className={clsx(styles.root, customClass)}>{children}</div>
);
export default Container;
