import React from 'react';

// function Greet() {
//     return (
//         <h1> hello lpd</h1>
//     );
// }

const Greet = props =>
    <div>
        <h1>hello {props.name} {props.number}</h1>
        {props.children}
    </div>

export default Greet;
