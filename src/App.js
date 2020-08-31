import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/ClassCounterOne";
import HookCounterOne from "./components/HookCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataFetchingIndividualItem from "./components/DataFetchingIndividualItem";
import DataFetchingIndividualItemWithButton from "./components/DataFetchingIndividualItemWithButton";
import UseContextHook from "./components/UseContextHook";
import CounterOne from "./components/CounterOne";

//For userContext hook
export const UserContext = React.createContext();
export const Channel = React.createContext();

function App() {
  return (
    <div>
      {/* <h1>Hooks vs Classes!</h1> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingIndividualItem /> */}
      {/* <DataFetchingIndividualItemWithButton /> */}
      {/* <UserContext.Provider value={"Carlos"}>
        <Channel.Provider value={"Valle"}>
          <UseContextHook />
        </Channel.Provider>
      </UserContext.Provider> */}
      <CounterOne />
    </div>
  );
}

export default App;
