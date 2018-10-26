import React, {Fragment} from 'react';

const Smurfs = props => {
    return (
        <Fragment>
        <h3>{props.smurf.name}</h3>
        <h3>{props.smurf.age}</h3>
        <h3>{props.smurf.height}</h3>
        </Fragment>
    )
}

export default Smurfs