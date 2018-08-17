import React from 'react';

export default function Smurf (props) {
    return(
        <div className="smurf">
            <div>
                <h1>{props.smurf.name}</h1>
            </div>
            <div>
                <h2>{props.smurf.age}{' '}Years Old</h2>
            </div>
            <div>
                <h3>{props.smurf.height}{' '} Tall</h3>
            </div>
            <div>
                 <h4>Smurf ID:{' '}{props.smurfid}</h4>
            </div>
        </div>
    );
}
