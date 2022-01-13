import React, {Component} from 'react';

class EventBind extends Component {

    constructor() {
        super();
        this.state = {
            message: 'hello'
        }
        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({
    //         message: "bye !"
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: "bye !"
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*<button onClick={this.clickHandler.bind(this)}>click</button>*/}
                {/*<button onClick={() => this.clickHandler()}>click</button>*/}
                <button onClick={this.clickHandler}>click</button>
            </div>
        );
    }
}

export default EventBind;
