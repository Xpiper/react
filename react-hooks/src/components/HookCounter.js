import React, {useState} from 'react';

function HookCounter(props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count} hook</button>
        </div>
    );
}

export default HookCounter;

