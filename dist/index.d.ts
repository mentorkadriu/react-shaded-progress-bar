type ProgressBarVariant = "default" | "ruler" | "ruler-2" | "ruler-3" | "heat-gradient" | "dots-pattern";
type ProgressBarColor = "orange" | "red" | "dark" | "cyan" | "navy" | "yellow" | "custom";
interface ShadedProgressBarProps {
    value: number;
    variant?: ProgressBarVariant;
    color?: ProgressBarColor;
    onChange?: (value: number) => void;
}
export function ShadedProgressBar({ value, variant, color, onChange, }: ShadedProgressBarProps): JSX.Element;
