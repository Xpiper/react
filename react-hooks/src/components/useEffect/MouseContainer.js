import React, {useState} from 'react';
import HookMouse from "./HookMouse";

function MouseContainer(props) {

    const [display, setDisplay] = useState();

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    );
}

export default MouseContainer;