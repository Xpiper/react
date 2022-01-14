import React, {Fragment} from 'react';

function Columns(props) {

    const items = [];

    return (
        <Fragment>
            {items.map(item => <Fragment key={item.id}>
                <h1>Title</h1>
                <p>{item.title}</p>
            </Fragment>)}
            <td>Name</td>
            <td>lpd</td>
            <>
                <h1>hello</h1>
            </>
        </Fragment>
    );
}

export default Columns;
