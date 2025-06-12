import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import styles from "./CustomButton.module.scss";
import clsx from "clsx";

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  outline?: boolean;
  className?: string;
}

const CustomButton = ({
  children,
  className,
  outline = false,
  ...props
}: ICustomButtonProps): ReactElement => {
  return (
    <button
      className={clsx(
        styles.root,
        {
          [styles["root_outlined"]]: outline,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
