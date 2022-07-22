export type ProgressBarVariant =
  | "default"
  | "ruler"
  | "ruler-2"
  | "ruler-3"
  | "heat-gradient"
  | "dots-pattern";
export type ProgressBarColor =
  | "orange"
  | "red"
  | "dark"
  | "cyan"
  | "navy"
  | "yellow"
  | "custom";
export interface ShadedProgressBarProps {
  value: number;
  variant?: ProgressBarVariant;
  color?: ProgressBarColor;
  onChange?: (value: number) => void;
}
