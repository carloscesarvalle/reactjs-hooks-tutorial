import React, { useContext } from "react";
import { UserContext, Channel } from "../App";

const NestedForUseContextB = () => {
  const user = useContext(UserContext);
  const channel = useContext(Channel);

  return (
    <div>
      {user} + {channel} from App.js using useContext Hook!
    </div>
  );
};

export default NestedForUseContextB;
