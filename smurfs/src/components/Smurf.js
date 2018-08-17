import React from 'react';

export default function Smurf (props) {
    return(
        <div>
            <div>
                {props.smurf.id}
            </div>
            <div>
                {props.smurf.name}
            </div>
            <div>
                {props.smurf.age}
            </div>
            <div>
                {props.smurf.height}
            </div>
        </div>
    );
}
