import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

const Smurfs = props => {
    return (
        <div className="Smurf-Container">
            <h1>Smurfs!</h1>
            {props.smurfs.map(smurf => {
                return (
                    <ul className="Smurf-List" key={smurf.id}>
                        <li style={{ listStyle: 'none' }}>Name: {smurf.name}</li>
                        <li style={{ listStyle: 'none' }}>Age: {smurf.age} years</li>
                        <li style={{ listStyle: 'none' }}>Height: {smurf.height} cm</li>
                        <button onClick={() => props.deleteSmurf(smurf.id)}>X</button>
                    </ul>
                );
            })}
        </div>
    );
};

export default connect(null, { deleteSmurf })(Smurfs);