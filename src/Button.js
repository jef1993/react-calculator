import React from "react";

const mapping = [
  ["cancel", "C"],
  ["delete", "DEL"],
  ["divide", "/"],
  ["multiply", "*"],
  ["num-7", 7],
  ["num-8", 8],
  ["num-9", 9],
  ["minus", "-"],
  ["num-4", 4],
  ["num-5", 5],
  ["num-6", 6],
  ["plus", "+"],
  ["num-1", 1],
  ["num-2", 2],
  ["num-3", 3],
  ["equal", "="],
  ["num-0", 0],
  ["decimal", "."],
];

class Buttons {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

const layout = mapping.map((el) => new Buttons(el[0], el[1]));

function Button(props) {
  return (
    <button className={props.class} onClick={props.click}>
      {props.content}
    </button>
  );
}

export default Button;

export { layout };
