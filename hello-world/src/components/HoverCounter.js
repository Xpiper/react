import React, {Component} from 'react';
import UpdatedComponent from "./WithCounter";
import withCounter from "./WithCounter";

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //     }
    // }
    //
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }

    render() {
        const {count, incrementCount} = this.props;
        return (
            <div>
                <h1 onMouseOver={incrementCount}> hovered {count} times</h1>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 5);
