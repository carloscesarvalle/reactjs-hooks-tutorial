import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    //empty [] dependency if you use prevCount
  }, [count]);

  const tick = () => {
    setCount(count + 1);
    //If I use prevCount callback function I don't need to specify "count" in the dependency array [] on useEffect hook
    // setCount((prevCount) => prevCount + 1);
  };

  return <div>{count}</div>;
};

export default IntervalHookCounter;
