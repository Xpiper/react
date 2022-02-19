import React, {useEffect, useState} from 'react';
import axios from "axios";

function DataFetching(props) {

    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    const [searchId, setSearchId] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${searchId}`)
            .then(res => setPosts(res.data))
            .catch(error => console.log(error));
    }, [searchId]);

    const handleClick = () => {
        setSearchId(id);
    }

    return (
        <>
            <input type="text" onChange={event => setId(event.target.value)} value={id}/>
            <button onClick={handleClick}>click</button>
            <div>
                {posts.title}
                {/*{posts.map(post => <h1 key={post.id}>{post.title}</h1>)}*/}
            </div>
        </>
    );
}

export default DataFetching;
