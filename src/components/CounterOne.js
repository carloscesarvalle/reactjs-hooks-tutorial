import React, { useReducer } from "react";
//keep in mind JS reducer function: array.reduce(callbackFunction(accumulator, value), initialValue)

const initialState = 0;

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

const CounterOne = () => {
  const [count, dispatcher] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count {count}</div>
      <button onClick={() => dispatcher("increment")}>+1</button>
      <button onClick={() => dispatcher("decrement")}>-1</button>
      <button onClick={() => dispatcher("reset")}>Reset</button>
    </div>
  );
};

export default CounterOne;
