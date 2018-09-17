import React from 'react';

let WassupForm = (props) => {
    return (
    <form className="input-fields" onSubmit={props.handleSubmit}>
        <input type="text" placeholder="What's up?" value={props.newWassup} onChange={props.handleNewWassup} required={true}/>
        <input type="text" placeholder="Username" value={props.user} onChange={props.handleNewUser}/>
        <input type='submit' value="Post"/>
    </form>)
}

export default WassupForm;