import React, {useState} from 'react';
import {buyCake} from "../redux";
import {connect} from "react-redux";

function NewCakeContainer(props) {
    const [num, setNum] = useState(1);
    return (
        <div>
            <div>
                <input type="text" value={num} onChange={event => setNum(event.target.value)}/>
            </div>
            <h2>number of cakes {props.numOfCakes}</h2>
            <button onClick={() => props.buyCake(num)}>buy cake num</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (num) => dispatch(buyCake(num))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
