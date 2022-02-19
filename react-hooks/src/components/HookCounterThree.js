import React, {useState} from 'react';

function HookCounterThree(props) {

    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
        <div>
            <form action="">
                <input type="text"
                       onChange={event => setName({...name, firstName: event.target.value})}
                       value={name.firstName}/>
                <input type="text"
                       onChange={event => setName({...name, lastName: event.target.value})}
                       value={name.lastName}/>
                <h2>{name.firstName}</h2>
                <h2>{name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    );
}

export default HookCounterThree;
