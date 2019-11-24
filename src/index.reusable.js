import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

const getNumberWithin = (value, min, max) =>
  Math.min(Math.max(min, value), max);

const useBoundedNumber = (initialValue, min, max) => {
  const [value, setValue] = useState(() =>
    getNumberWithin(initialValue, min, max)
  );

  const setBoundedValue = useCallback(
    updater => {
      return setValue(oldVal => {
        let newValue = updater;
        if (typeof updater === "function") {
          newValue = updater(oldVal);
        }

        return getNumberWithin(newValue, min, max);
      });
    },
    [min, max]
  );

  return [value, setBoundedValue];
};

function Counter() {
  const [top, setTop] = useBoundedNumber(0, 0, 85);
  const [left, setLeft] = useBoundedNumber(0, 0, 95);
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
