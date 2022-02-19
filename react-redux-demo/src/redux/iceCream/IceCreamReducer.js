import {BUY_ICE_CREAM} from "./IceCreamTypes";

const initialState = {
    numOfIceCreams: 100
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + 1
            }
        default:
            return state;
    }
}

export default iceCreamReducer;
