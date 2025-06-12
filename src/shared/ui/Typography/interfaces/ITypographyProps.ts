export type TTypographyType =
  | "h1"
  | "h2"
  | "h3"
  | "normal"
  | "p"
  | "error"
  | "title"
  | "small"
  | "medium"
  | "primarySelect"
  | "secondarySelect";

type TagComponent =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "span"
  | "p"
  | "label"
  | "strong";

export interface ITypographyProps {
  component?: TagComponent;
  type?: TTypographyType;
}
