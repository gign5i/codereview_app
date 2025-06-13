import { ReactElement } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { ICardProps } from "@/shared/ui/Card/interfaces/ICardProps";

const Card = ({
  className,
  headerClassName,
  contentClassName,
  footerClassName,
  header,
  children,
  footer,
}: ICardProps): ReactElement => (
  <section className={clsx(styles.root, className)}>
    {header && <div className={clsx(styles.headerRoot, headerClassName)}>{header}</div>}
    {children && <div className={clsx(contentClassName)}>{children}</div>}
    {footer && <div className={clsx(styles.footerRoot, footerClassName)}>{footer}</div>}
  </section>
);

export default Card;
