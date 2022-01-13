import React, {Component} from 'react';

class Welcome extends Component {

    render() {
        const {name, number, children} = this.props;
        return (
            <div>
                <h1> class component {name} {number} {children}</h1>
            </div>
        );
    }
}

export default Welcome;
