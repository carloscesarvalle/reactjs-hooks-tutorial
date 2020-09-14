import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("mounting code");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      x - {x} y - {y}
    </div>
  );
};

export default HookMouse;
