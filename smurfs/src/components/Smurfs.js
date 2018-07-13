import React from 'react';
import Smurf from './Smurf';
import './App.css';

const Smurfs = props => {
    return (
        <div className="smurfs">
            {props.smurfs.map((smurf, index) => {
                return (
                    <Smurf
                        key={index}
                        smurf={smurf}
                        handleDelete={props.handleDelete}
                        handleUpdate={props.handleUpdate}
                    />
                );
            })}
        </div>
    );
};

export default Smurfs;