import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    handleCommentsChange = (event) => {
        this.setState({comments: event.target.value})
    }

    handleTopicChange = (event) => {
        this.setState({topic: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>username</label>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}/>
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        );
    }
}

export default Form;
