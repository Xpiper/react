import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

function App() {
    return (
        <div className="App">
            <UserGreeting/>
            {/*<ParentComponent/>*/}
            {/*<EventBind/>*/}
            {/*<FunctionClick/>*/}
            {/*<ClassClick/>*/}
            {/*<Counter/>*/}
            {/*<Message/>*/}
            {/*<Greet name='one' number={1}>*/}
            {/*    <p>this is children props</p>*/}
            {/*</Greet>*/}
            {/*<Greet name='two' number={2}/>*/}
            {/*<Greet name='three' number={3}/>*/}
            {/*<Welcome name='one' number={1}>*/}
            {/*    <p>this is children props</p>*/}
            {/*</Welcome>*/}
            {/*<Welcome name='two' number={2}/>*/}
            {/*<Welcome name='three' number={3}/>*/}
            {/*<Hello/>*/}
        </div>
    );
}

export default App;
