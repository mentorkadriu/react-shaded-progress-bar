import {
  ProgressBarColor,
  ProgressBarVariant,
} from "../ShadedProgressBar.types";
import React, { useContext } from "react";
import PlaygroundContext from "../../contexts/PlaygoundContext";

export default function Playground() {
  const { variant, color, setValue, setVariant, setColor } =
    useContext(PlaygroundContext);

  function handleSwitch() {
    const randomNumber = () => {
      return Math.floor(Math.random() * 100) + 1;
    };
    setValue(randomNumber());
  }

  return (
    <div className={"playground"}>
      <button onClick={handleSwitch}>Switch value</button>
      <fieldset>
        <legend>Set variant</legend>
        <select
          name="variant"
          id="color"
          value={variant}
          onChange={(event) =>
            setVariant(event.target.value as ProgressBarVariant)
          }
        >
          <option value="default">Default</option>
          <option value="ruler">Ruler</option>
          <option value="ruler-2">Ruler 2</option>
          <option value="ruler-3">Ruler 3</option>
          <option value="dots-pattern">Dots</option>
          <option value="heat-gradient">Heat Gradient</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Set color</legend>
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
          <option value="custom">Custom</option>
        </select>
      </fieldset>
    </div>
  );
}
