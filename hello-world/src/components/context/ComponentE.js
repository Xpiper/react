import React, {Component} from 'react';
import ComponentF from "./ComponentF";
import {userContext} from "./userContext";

class ComponentE extends Component {

    static contextType = userContext;

    render() {
        return (
            <div>
                ComponentE context {this.context}
                <ComponentF/>
            </div>
        );
    }
}

export default ComponentE;
