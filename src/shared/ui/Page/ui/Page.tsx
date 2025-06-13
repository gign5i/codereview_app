import { ReactElement, ReactNode } from "react";
import styles from "./Page.module.scss";

const Page = ({ children }: { children: ReactNode }): ReactElement => (
  <div className={styles.pageContainer}>{children}</div>
);

export default Page;
