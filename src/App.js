import React from "react";

//useState Hook Examples
import FirstExampleWithClass from "./components/1_useState_Hook/FirstExampleWithClass";
import FirstExampleWithHooks from "./components/1_useState_Hook/FirstExampleWithHooks";
import SecondExampleWithHooks from "./components/1_useState_Hook/SecondExampleWithHooks";
import ThirdExampleWithClass from "./components/1_useState_Hook/ThirdExampleWithClass";
import ThirdExampleWithHooks from "./components/1_useState_Hook/ThirdExampleWithHooks";
import FourthExampleWithHooks from "./components/1_useState_Hook/FourthExampleWithHooks";
import FifthExampleWithHooks from "./components/1_useState_Hook/FifthExampleWithHooks";


//useEffect Hook Examples
// import ClassMouse from "./components/2_useEffect_Hook/1_ClassMouse.js";
// import HookMouse from "./components/2_useEffect_Hook/2_HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import FirstExampleWithClassInterval  from "./components/2_useEffect_Hook/3_FirstExampleWithClassInterval ";
// import FirstExampleWithHooksInterval from "./components/2_useEffect_Hook/4_FirstExampleWithHooksInterval";
// import DataFetching from "./components/2_useEffect_Hook/5_DataFetching";
// import DataFetchingIndividualItem from "./components/2_useEffect_Hook/6_DataFetchingIndividualItem";
// import DataFetchingIndividualItemWithButton from "./components/2_useEffect_Hook/7_DataFetchingIndividualItemWithButton";
import DataFetchingIndividualItemWithManyButtons from "./components/2_useEffect_Hook/8_DataFetchingIndividualItemWithManyButtons";
// import UseContextHook from "./components/UseContextHook";
// import CounterOne from "./components/3_useReducer_Hook/CounterOne";

//For userContext hook
// export const UserContext = React.createContext();
// export const Channel = React.createContext();


//Just uncomment out the component you need to display

function App() {
  return (
    <div>
      <h1>Hooks vs Classes!</h1>
      {/* useState */}
      {/* <FirstExampleWithClass /> */}
      {/* <FirstExampleWithHooks /> */}
      {/* <SecondExampleWithClass /> */}
      {/* <SecondExampleWithHooks /> */}
      {/* <ThirdExampleWithClass /> */}
      {/* <ThirdExampleWithHooks /> */}
      {/* <FourthExampleWithHooks /> */}
      {/* <FifthExampleWithHooks /> */}

      {/* {useEffect} */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <FirstExampleWithClassInterval  /> */}
      {/* <FirstExampleWithHooksInterval /> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingIndividualItem /> */}
      {/* <DataFetchingIndividualItemWithButton /> */}
      <DataFetchingIndividualItemWithManyButtons />

      {/* useContext */}
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
