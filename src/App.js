import React from "react";

//useState Hook Examples
import FirstExampleWithClass from "./components/1_useState_Hook/FirstExampleWithClass";
import FirstExampleWithHooks from "./components/1_useState_Hook/FirstExampleWithHooks";
import SecondExampleWithHooks from "./components/1_useState_Hook/SecondExampleWithHooks";
import ThirdExampleWithClass from "./components/1_useState_Hook/ThirdExampleWithClass";
import ThirdExampleWithHooks from "./components/1_useState_Hook/ThirdExampleWithHooks";
import FourthExampleWithHooks from "./components/1_useState_Hook/FourthExampleWithHooks";
import FifthExampleWithHooks from "./components/1_useState_Hook/FifthExampleWithHooks";



import ClassMouse from "./components/2_useEffect_Hook/ClassMouse";
import HookMouse from "./components/2_useEffect_Hook/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/2_useEffect_Hook/DataFetching";
import DataFetchingIndividualItem from "./components/2_useEffect_Hook/DataFetchingIndividualItem";
import DataFetchingIndividualItemWithButton from "./components/2_useEffect_Hook/DataFetchingIndividualItemWithButton";
import UseContextHook from "./components/UseContextHook";
import CounterOne from "./components/3_useReducer_Hook/CounterOne";

//For userContext hook
export const UserContext = React.createContext();
export const Channel = React.createContext();


//Just uncomment out the component you need to display

function App() {
  return (
    <div>
      <h1>Hooks vs Classes!</h1>
      {/* <FirstExampleWithClass /> */}
      {/* <FirstExampleWithHooks /> */}
      {/* <SecondExampleWithClass /> */}
      {/* <SecondExampleWithHooks /> */}
      {/* <ThirdExampleWithClass /> */}
      {/* <ThirdExampleWithHooks /> */}
      {/* <FourthExampleWithHooks /> */}
      <FifthExampleWithHooks />
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
      {/* <CounterOne /> */}
    </div>
  );
}

export default App;
