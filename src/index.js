import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const moveDown = () => setTop(val => val + 10);
  const moveRight = () => setLeft(val => val + 10);
  const flip = () => {
    setTop(left);
    setLeft(top);
  };

  return (
    <div>
      <button onClick={moveDown}>Down</button>
      <button onClick={moveRight}>Right</button>
      <button onClick={flip}>Flip</button>
      <div style={{ width: 115, height: 105, border: "1px solid grey" }}>
        <div
          style={{
            ...style,
            top,
            left
          }}
        />
      </div>
    </div>
  );
}

const style = {
  borderRadius: "50%",
  background: "red",
  position: "relative",
  height: 20,
  width: 20
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
