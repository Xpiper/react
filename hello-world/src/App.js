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
import NameList from "./components/NameList";
import StylesSheet from "./components/StylesSheet";
import InLine from "./components/InLine";
import './components/appStyles.css'
import styles from './components/appSytles.module.css'
import Form from "./components/Form";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FrParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import HoverCounterTwo from "./components/HoverCounterTwo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import User from "./components/User";
import ComponentC from "./components/context/ComponentC";
import {UserProvider, UserConsumer} from './components/context/userContext'

function App() {
    return (
        <div className="App">
            <UserProvider value='lpd'>
                <ComponentC/>
            </UserProvider>
            {/*<Counter>*/}
            {/*    {(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount}/>}*/}
            {/*</Counter>*/}
            {/*<Counter>*/}
            {/*    {(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount}/>}*/}
            {/*</Counter>*/}
            {/*<ClickCounterTwo/>*/}
            {/*<HoverCounterTwo/>*/}
            {/*<User render={(isLoggedIn) => isLoggedIn ? 'lpd' : 'guest'}/>*/}
            {/*<ClickCounter name='lpd'/>*/}
            {/*<HoverCounter/>*/}
            {/*<ErrorBoundary>*/}
            {/*    <Hero heroName='Batman'/>*/}
            {/*</ErrorBoundary>*/}
            {/*<ErrorBoundary>*/}
            {/*    <Hero heroName='Joker'/>*/}
            {/*</ErrorBoundary>*/}
            {/*<PortalDemo/>*/}
            {/*<FrParentInput/>*/}
            {/*<FocusInput/>*/}
            {/*<RefsDemo/>*/}
            {/*<ParentComp/>*/}
            {/*<Table/>*/}
            {/*<FragmentDemo/>*/}
            {/*<Form/>*/}
            {/*<h1 className='error'>error</h1>*/}
            {/*<h1 className={styles.success}>success</h1>*/}
            {/*<InLine/>*/}
            {/*<StylesSheet primary={false}/>*/}
            {/*<NameList/>*/}
            {/*<UserGreeting/>*/}
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
