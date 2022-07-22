import React, { useState } from "react";
import ShadedProgressBar from "./components/ShadedProgressBar";
import PlaygroundContext from "./contexts/PlaygoundContext";
import {
  ProgressBarColor,
  ProgressBarVariant,
} from "./components/ShadedProgressBar.types";
import "./demo.scss";
import "./custom-style.scss";
import Playground from "./components/Playground/Playground";

export default function App() {
  const [value, setValue] = useState(65);
  const [variant, setVariant] = useState<ProgressBarVariant>();
  const [color, setColor] = useState<ProgressBarColor>("orange");

  return (
    <PlaygroundContext.Provider
      value={{ value, setValue, variant, setVariant, color, setColor }}
    >
      <header className={"header"}>
        <h1>Shaded Progress Bars</h1>
        <p>React Component</p>
      </header>
      <div className="flexy-grid">
        <div className="flexy-column">
          <Playground />
        </div>
        <div className="flexy-column">
          <ShadedProgressBar
            value={value}
            variant={variant}
            color={color}
            onChange={(v) => {
              console.log(v);
            }}
          />
        </div>
      </div>
      <div className={"flexy-grid"}>
        <h3 className="h3">Striped bars</h3>
        <ShadedProgressBar value={value} variant={"ruler"} color={"navy"} />
        <ShadedProgressBar value={value} variant={"ruler-2"} color={"orange"} />
        <ShadedProgressBar value={value} variant={"ruler-3"} color={"cyan"} />
        <div className={"flexy-grid"}>
          <h3 className="h3">Heat bars</h3>
          <ShadedProgressBar
            value={value}
            variant={"heat-gradient"}
            color={"red"}
          />
        </div>
        <div className={"flexy-grid"}>
          <h3 className="h3">Dot pattern</h3>
          <ShadedProgressBar
            value={value}
            variant={"dots-pattern"}
            color={"dark"}
          />
        </div>
      </div>
    </PlaygroundContext.Provider>
  );
}
