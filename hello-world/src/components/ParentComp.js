import React, {Component} from 'react';
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";

class ParentComp extends Component {

    constructor() {
        super();
        this.state = {
            name: 'lpd'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'lpd'
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                ParentComp
                <RegularComponent name={this.state.name}/>
                <PureComponent name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;
