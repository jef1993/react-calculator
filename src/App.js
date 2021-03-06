import React from "react";
import { useState } from "react";
import { evaluate } from "mathjs";
import Button, { layout } from "./Button";

function App() {
  const [str, setStr] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (e) => {
    const symbol = e.target.innerHTML;
    if (symbol === "C") {
      setStr(str.slice(0, -1));
    } else if (symbol === "DEL") {
      setStr("");
      setOutput("");
    } else if (symbol === "=") {
      const evaluateFix = evaluate(
        str[str.length - 1].match(/\D/) ? str.slice(0, -1) : str
      ).toString();
      setStr(evaluateFix);
      setOutput(evaluateFix);
    } else {
      if (symbol.match(/\D/) && str.slice(-1).match(/\D/)) {
        setStr(str.slice(0, -1) + symbol);

        if (symbol.match(/[*/]/) && str.length === 1) {
          setStr(str);
        }
      } else {
        setStr(symbol.match(/[*/]/) && str === "" ? "" : str + symbol);
      }
    }
  };

  return (
    <div className="App">
      <div className="main">
        <div className="monitor">
          <div className="monitor__input">{str}</div>
          <div className="monitor__output">{output}</div>
        </div>

        <div className="buttons">
          {layout.map((el, i) => {
            return (
              <Button
                class={el.name}
                content={el.symbol}
                click={handleClick}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
