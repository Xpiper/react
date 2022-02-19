import React from 'react';
import {connect} from "react-redux";
import {buyCake, buyIceCream} from "../redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>item {props.item}</h2>
            <button onClick={props.dispatchFun}>buy</button>
        </div>
    );
}

const mapsStateToProps = (state, ownProps) => {
    const item = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    return {
        item
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFun = ownProps.cake ?
        () => dispatch(buyCake()) :
        () => dispatch(buyIceCream());
    return {
        dispatchFun
    }
}

export default connect(mapsStateToProps,mapDispatchToProps)(ItemContainer);
