import React, {Component} from 'react';

class UserGreeting extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return this.state.isLoggedIn && <div>welcome lpd</div>

        // return this.state.isLoggedIn ? <div>welcome lpd</div> : <div>welcome guest</div>

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>welcome lpd</div>
        // } else {
        //     message = <div>welcome guest</div>
        // }
        //
        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div> welcome lpd</div>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <div>welcome guest</div>
        //         </div>
        //     );
        // }
    }
}

export default UserGreeting;
