import React from 'react';
import './myStyles.css'

function StylesSheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className='primary'>StylesSheet</h1>
            <h1 className={`${className} font-xl`}>StylesSheet</h1>
        </div>
    );
}

export default StylesSheet;
