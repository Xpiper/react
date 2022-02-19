import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../redux/user/userActions";

function UserContainer(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    const {users, loading, error} = useSelector(state => {
        return {
            users: state.user.users,
            loading: state.user.loading,
            error: state.user.error
        }
    })

    return loading ?
        (<h2>loading</h2>) :
        error ? (<h2>error</h2>) :
            (
                <div>
                    {users.map(user => <h2 key={user.id}>{user.name}</h2>)}
                </div>
            );
}

export default UserContainer;
