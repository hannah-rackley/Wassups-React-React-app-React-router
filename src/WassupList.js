import WassupRow from './WassupRow';
import React from 'react';

let WassupList = props => 
    <div>
        {props.wassups.map(wassup => 
<WassupRow wassup={wassup} key={wassup.id}/>)
    }
    </div>;

export default WassupList;