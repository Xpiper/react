import React, {Component} from 'react';
import RegularComponent from "./RegularComponent";
import PureComponent from "./PureComponent";
import MemoComp from "./MemoComp";

class ParentComp extends Component {

    constructor(props) {
        super(props);
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
                {/*<RegularComponent name={this.state.name}/>*/}
                {/*<PureComponent name={this.state.name}/>*/}
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;
