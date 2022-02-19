import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch, getState) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users1')
            .then(res => {
                dispatch(fetchUserSuccess(res.data))
            })
            .catch(error => {
                dispatch(fetchUserFailure(error))
            })
    }
}