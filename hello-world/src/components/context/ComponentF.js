import React, {Component} from 'react';
import {UserConsumer} from "./userContext";

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (name) => {
                            return <h1>{name}</h1>
                        }
                    }
                </UserConsumer>
            </div>
        );
    }
}

export default ComponentF;
