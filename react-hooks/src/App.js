import './App.css';
import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import ClassMouse from "./components/useEffect/ClassMouse";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import DataFetching from "./components/useEffect/http/DataFetching";
import ComponentC from "./components/useContext/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
    return (
        <div className="App">
            <UserContext.Provider value={'lpd'}>
                <ChannelContext.Provider value={'lpd2'}>
                    <ComponentC/>
                </ChannelContext.Provider>
            </UserContext.Provider>
            {/*<DataFetching/>*/}
            {/*<MouseContainer/>*/}
            {/*<HookMouse/>*/}
            {/*<ClassMouse/>*/}
            {/*<HookCounterOne/>*/}
            {/*<ClassCounterOne/>*/}
            {/*<HookCounterFour/>*/}
            {/*<HookCounterThree/>*/}
            {/*<HookCounterTwo/>*/}
            {/*<HookCounter/>*/}
            {/*<ClassCounter/>*/}
        </div>
    );
}

export default App;
