import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake} from "../redux";

function HooksCakeContainer(props) {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>number of cakes {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    );
}

export default HooksCakeContainer;
