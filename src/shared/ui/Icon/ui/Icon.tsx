import { ReactElement } from "react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./Icon.module.scss";
import { IIconProps } from "@/shared/ui/Icon/interfaces/IIconProps";

const Icon = ({ icon, className, ...props }: IIconProps): ReactElement => (
  <Image {...props} src={icon} alt="icon" className={clsx(styles.root, className)} />
);

export default Icon;
