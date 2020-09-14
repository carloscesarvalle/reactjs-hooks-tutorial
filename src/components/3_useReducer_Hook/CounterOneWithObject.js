import React from "react";

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOneWithObject = () => {
  const [count, dispatcher] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count {count.firstCounter}</div>
      <button onClick={() => dispatcher("increment")}>+1</button>
      <button onClick={() => dispatcher("decrement")}>-1</button>
      <button onClick={() => dispatcher("reset")}>Reset</button>
    </div>
  );
};

export default CounterOneWithObject;
