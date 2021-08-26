import React from "react";
import Button, { layout } from "./Button";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="monitor">
          <div className="monitor__content">content</div>
        </div>

        <div className="buttons">
          <Button class="" content="C" />
          <Button class="" content="DC" />
          <Button class="" content="/" />
          <Button class="" content="*" />
          <Button class="" content="7" />
          <Button class="" content="8" />
          <Button class="" content="9" />
          <Button class="" content="-" />
          <Button class="" content="4" />
          <Button class="" content="5" />
          <Button class="" content="6" />
          <Button class="" content="+" />
          <Button class="" content="1" />
          <Button class="" content="2" />
          <Button class="" content="3" />
          <Button class="equal" content="=" />
          <Button class="num-0" content="0" />
          <Button class="" content="." />

        </div>
      </div>
    </div>
  );
}

export default App;
