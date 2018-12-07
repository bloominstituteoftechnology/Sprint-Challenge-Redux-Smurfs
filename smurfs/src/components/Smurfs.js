import React from 'react';

const smurfs = props => {
    return (
        <div>
            {props.smurfs.map((smurf, index) => {
                return (
                    <div key={index}>
                        <div>{smurf.name}</div> 
                    </div>
                );
            })}
        </div>
    );
};

export default smurfs;