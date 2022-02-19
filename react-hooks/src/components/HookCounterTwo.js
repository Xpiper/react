import React, {useState} from 'react';

function HookCounterTwo(props) {

    const [count, setCount] = useState(0);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count => count + 1);
        }
    }

    return (
        <div>
            {count}
            <br/>
            <button onClick={() => setCount(0)}>reset</button>
            <br/>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br/>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br/>
            <button onClick={incrementFive}>incrementFive</button>
        </div>
    );
}

export default HookCounterTwo;
