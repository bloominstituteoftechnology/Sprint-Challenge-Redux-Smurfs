import React from 'react';

const Smurfs = (props) => {
    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => {
                return (
                    <div className="smurf" key={smurf.name}>
                        {smurf.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Smurfs;