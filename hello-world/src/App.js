import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
    return (
        <div className="App">
            <Message/>
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
