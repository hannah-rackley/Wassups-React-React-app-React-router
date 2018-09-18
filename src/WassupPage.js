import React from 'react';
import WassupRow from './WassupRow';
import { Link } from 'react-router-dom';

const WassupPageContainer = props => {
    let urlId = props.match.params.id;
    let wassuper = props.wassups.filter(wassup => wassup.id.toString() === urlId);
    return wassuper.map(wassuper => { return (
        <div className='rows' key={wassuper.id}>
            <WassupRow wassup={wassuper}/>
            <Link to={`/home`}>Go home</Link>
        </div>
    )})
}

export default WassupPageContainer;