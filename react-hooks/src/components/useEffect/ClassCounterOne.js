import React, {Component} from 'react';

class ClassCounterOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            console.log('update document title')
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name}
                       onChange={event => this.setState({name: event.target.value})}/>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Clicked {this.state.count} times
                </button>
            </div>
        );
    }
}

export default ClassCounterOne;
