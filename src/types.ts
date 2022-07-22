export type ProgressBarVariant = "ruler" | "ruler-2";
export type ProgressBarColor = "orange" | "red" | "dark";
export interface ShadedProgressBarProps {
  value: number;
  minValue?: number;
  maxValue?: number;
  variant?: ProgressBarVariant;
  color?: ProgressBarColor;
  onChange?: (value: number) => void;
}
