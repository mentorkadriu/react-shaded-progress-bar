import * as React from "react";
import "../style.scss";
import { ShadedProgressBarProps } from "../types";

export default function ShadedProgressBar({
  value = 50,
  minValue = 0,
  maxValue = 100,
  variant = "ruler",
  color = "orange",
  onChange,
}: ShadedProgressBarProps) {
  React.useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  return (
    <div className="progress-factor flexy-item">
      <div className="progress-bar">
        <div
          className={`bar has-rotation has-colors ${color} ${variant} `}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={minValue}
          aria-valuemax={maxValue}
        >
          <div className="tooltip white" />
          <div className="bar-face face-position roof percentage" />
          <div className="bar-face face-position back percentage" />
          <div className="bar-face face-position floor percentage volume-lights" />
          <div className="bar-face face-position left" />
          <div className="bar-face face-position right" />
          <div className="bar-face face-position front percentage volume-lights shine" />
        </div>
      </div>
    </div>
  );
}
