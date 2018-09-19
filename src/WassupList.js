import WassupRow from './WassupRow';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let WassupList = props => 
    <div>
        {props.wassups.map(wassup => {
            return (
                <div className='rows' key={wassup.id}>
                    <WassupRow wassup={wassup}/>
                    <div className="column">
                        <Link to={`/home/${wassup.id}`}>Full page!</Link>
                        <button onClick={() => {
                            props.dispatch({ type: 'REMOVE_WASSUP', id: wassup.id })
                        }
                        }>Delete</button>
                    </div>
                </div>
            )
        })}
    </div>;

let SmartWassupList = connect(state => state)(WassupList);

export default SmartWassupList;