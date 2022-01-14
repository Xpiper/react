import React from 'react';
import ReactDOM from "react-dom";

function PortalDemo(props) {
    return ReactDOM.createPortal(
        <div>
            <h1>Portal Demo</h1>
        </div>
        , document.getElementById('portal-root'), null);
}

export default PortalDemo;
