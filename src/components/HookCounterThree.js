import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      {/* Example of useState not automatically merging and updating the object
        In Class components setState merge key values of the state */}
      {/* <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(event) => {
            setName({ firstName: event.target.value });
          }}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(event) => {
            setName({ lastName: event.target.value });
          }}
        />
        <h2>My name is {name.firstName}</h2>
        <h2>My lastname is {name.lastName}</h2>
      </form> */}

      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(event) => {
            //   I use the spread syntax operator to make a copy of name object and then I redefine the firstName. This should merge both pieces of state into one.
            setName({ ...name, firstName: event.target.value });
          }}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(event) => {
            //   I use the spread syntax operator to make a copy of name object and then I redefine the lastName. This should merge both pieces of state into one.
            setName({ ...name, lastName: event.target.value });
          }}
        />
        <h2>My name is {name.firstName}</h2>
        <h2>My lastname is {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
};

export default HookCounterThree;
