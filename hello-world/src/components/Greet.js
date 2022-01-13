import React from 'react';

// function Greet() {
//     return (
//         <h1> hello lpd</h1>
//     );
// }

const Greet = ({name, number, children}) =>
    <div>
        <h1>hello {name} {number}</h1>
        {children}
    </div>

export default Greet;
