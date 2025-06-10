import { ReactElement } from "react";
import styles from "./Card.module.scss";
import clsx from "clsx";
import { ICardProps } from "@/shared/ui/Card/interfaces/ICardProps";

const Card = ({ className, header, children, footer }: ICardProps): ReactElement => {
  return (
    <section className={clsx(styles.root, className)}>
      {header && <div className={styles.headerRoot}>{header}</div>}
      <div>{children}</div>
      {footer && <div className={styles.footerRoot}>{footer}</div>}
    </section>
  );
};

export default Card;
