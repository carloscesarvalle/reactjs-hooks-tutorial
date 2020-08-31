import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // This is a good example why we need prevCount (equal to prevState in Class components).
  // When we click on "button +5" it only increments 1. It doesn't keep the previous count in memory.
  //   const incrementFive = () => {
  //     for (let i = 0; i < 5; i++) {
  //       setCount(count + 1);
  //     }
  //   };

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <button onClick={() => setCount(initialCount)}>reset</button>
      {/* <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button> */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
      <button onClick={incrementFive}>+5</button>
      <br />
      {count}
    </div>
  );
};

export default HookCounterTwo;
