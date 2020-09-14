import React, { useState, useEffect } from "react";
import HookMouse from "./2. useEffect Hook/HookMouse";
import ClassMouse from "./2. useEffect Hook/ClassMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState("true");

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Hide Me</button>
      <br />
      {/* This is a shorter way to use conditionals. The a ? b : c can be reduce to (a is true) then display b (a&&b) */}
      {display && <HookMouse />}
      {/* {display && <ClassMouse />} */}
    </div>
  );
};

export default MouseContainer;
