import React, { useState } from "react";
import ShadedProgressBar from "./components/ShadedProgressBar";
import { ProgressBarColor, ProgressBarVariant } from "./types";

export default function App() {
  const [value, setValue] = useState(30);
  const [variant, setVariant] = useState<ProgressBarVariant>("ruler");
  const [color, setColor] = useState<ProgressBarColor>("orange");

  function handleSwitch() {
    const randomNumber = () => {
      return Math.floor(Math.random() * 100);
    };
    setValue(randomNumber());
  }
  return (
    <div>
      <ShadedProgressBar
        value={value}
        variant={variant}
        color={color}
        onChange={(v) => {
          console.log(v);
        }}
      />
      <button onClick={handleSwitch}>Switch value</button>
      <select
        name="variant"
        id="color"
        value={variant}
        onChange={(event) =>
          setVariant(event.target.value as ProgressBarVariant)
        }
      >
        <option value="ruler">Ruler</option>
        <option value="ruler-2">Ruler 2</option>
        <option value="ruler-3">Ruler 3</option>
        <option value="dots-pattern">Dots</option>
        <option value="red heat-gradient">Heat Gradient</option>
      </select>
      <select
        name="color"
        id="color"
        value={color}
        onChange={(event) => setColor(event.target.value as ProgressBarColor)}
      >
        <option value="orange">Orange</option>
        <option value="cyan">Cyan</option>
        <option value="navy">Navy</option>
        <option value="red">Red</option>
        <option value="dark">Dark</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );
}
