import React, { useState } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count + 1</button>
      <p>{counter}</p>
    </div>
  );
};

export default HookCounter;
