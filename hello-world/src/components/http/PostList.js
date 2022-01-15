import React, {Component} from 'react';
import axios from "axios";

class PostList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postList: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts1')
            .then(res => {
                this.setState(
                    {postList: res.data}
                )
            })
            .catch(error => {
                console.log(error);
                this.setState({error: error})
            })
    }

    render() {
        const {postList,error} = this.state;
        return (
            <div>
                {postList.length ?
                    postList.map((post) => {
                        return <h1>{post.title}</h1>
                    }) : null
                }
            </div>
        );
    }
}

export default PostList;
