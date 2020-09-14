import React, { useState } from "react";

// I'm creating a simple button that increases a number by one. I'm starting from zero.


const FirstExampleWithHooks = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count + 1</button>
      <p>{counter}</p>
    </div>
  );
};

export default FirstExampleWithHooks;
