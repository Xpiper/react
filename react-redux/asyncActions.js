const redux = require('redux');
const axios = require('axios');
const thunk = require('redux-thunk').default;


const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

function fetchUserRequest() {
    return {
        type: FETCH_USER_REQUEST
    }
}

function fetchUserSuccess(users) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

function fetchUserFailure(error) {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

const fetchUsers = () => {
    return function (dispatch, getState) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch(fetchUserSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchUserFailure(error))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState())
});
store.dispatch(fetchUsers())
