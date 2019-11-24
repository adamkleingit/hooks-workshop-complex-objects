import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";

const initialState = {
  top: 0,
  left: 0
};

function Counter() {
  const [position, setPosition] = useState(initialState);
  const positionActions = useMemo(
    () => ({
      moveDown: () => setPosition(state => ({ ...state, top: state.top + 10 })),
      moveRight: () =>
        setPosition(state => ({ ...state, left: state.left + 10 })),
      flip: () => setPosition(state => ({ left: state.top, top: state.left }))
    }),
    []
  );

  return (
    <div>
      <button onClick={positionActions.moveDown}>Down</button>
      <button onClick={positionActions.moveRight}>Right</button>
      <button onClick={positionActions.flip}>Flip</button>
      <div style={{ width: 115, height: 105, border: "1px solid grey" }}>
        <div
          style={{
            ...style,
            top: position.top,
            left: position.left
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
