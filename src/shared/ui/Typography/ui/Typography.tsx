import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { createElement, forwardRef } from "react";
import clsx from "clsx";

import styles from "./Typography.module.scss";
import { ITypographyProps } from "@/shared/ui/Typography/interfaces/ITypographyProps";

const Typography = forwardRef<
  HTMLElement,
  PropsWithChildren<ITypographyProps> & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>(
  (
    {
      children,
      component = "span",
      type = "p",
      color = "black",
      className: currentClassName,
      ...rest
    },
    ref,
  ) => {
    const className = clsx(styles.root, currentClassName, {
      [styles[`root_${type}`]]: type,
      [styles[`color_${color}`]]: color,
    });

    return createElement(component, { className, ref, ...rest }, children);
  },
);

Typography.displayName = "Typography";

export default Typography;
