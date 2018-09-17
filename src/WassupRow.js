import React from 'react';

let WassupRow = props => 
    <div className='rows'>
        <h3>{props.wassup.content}</h3>
        <p className="author">-{props.wassup.user}</p>
    </div>;

export default WassupRow;