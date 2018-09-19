import SmartForm from './WassupFormContainer';
import WassupList from './WassupList';
import React from 'react';

let Homepage = props => {
    return (
    <div className="homepage">
        <h1>Wassup</h1>
        <SmartForm addWassup={props.addWassup}/>
        <WassupList wassups={props.wassups}/>
    </div>)
}

export default Homepage;