import WassupRow from './WassupRow';
import React from 'react';
import { Link } from 'react-router-dom';

let WassupList = props => 
    <div>
        {props.wassups.map(wassup => {
            return (
                <div className='rows' key={wassup.id}>
                    <WassupRow wassup={wassup}/>
                    <Link to={`/home/${wassup.id}`}>Full page!</Link>
                </div>
            )
        })}
    </div>;

export default WassupList;