import React, { useReducer } from "react";
import ReactDOM from "react-dom";

const initialState = {
  top: 0,
  left: 0
};

const reducer = (state, action) => {
  switch (action) {
    case "right":
      return { ...state, left: state.left + 10 };
    case "down":
      return { ...state, top: state.top + 10 };
    case "flip":
      return { left: state.top, top: state.left };
    default:
      return state;
  }
};

function Counter() {
  const [position, dispatch] = useReducer(reducer, initialState);
  const moveDown = () => dispatch("down");
  const moveRight = () => dispatch("right");
  const flip = () => dispatch("flip");

  return (
    <div>
      <button onClick={moveDown}>Down</button>
      <button onClick={moveRight}>Right</button>
      <button onClick={flip}>Flip</button>
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
