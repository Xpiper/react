import React, {Component} from 'react';
import axios from "axios";

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost', this.state)
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }

    render() {
        const {userId, title, body} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='userId' value={userId} onChange={this.changHandler}/>
                    </div>
                    <div>
                        <input type="text" name='title' value={title} onChange={this.changHandler}/>
                    </div>
                    <div>
                        <input type="text" name='body' value={body} onChange={this.changHandler}/>
                    </div>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
