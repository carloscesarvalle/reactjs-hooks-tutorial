import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Instead of adding a if statement to control the document.title changes like we did in a Class componenet,
  // useEffect offers a second paramenter [] where we can place the variable that is gonna be executed.
  useEffect(() => {
    console.log(`updating with useEffect`);
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>clicked {count} times</button>
    </div>
  );
};

export default HookCounterOne;
