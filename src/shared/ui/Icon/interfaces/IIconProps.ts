import { ImageProps, StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IIconProps extends Omit<ImageProps, "src" | "alt"> {
  icon: string | StaticImport;
  className?: string;
}
