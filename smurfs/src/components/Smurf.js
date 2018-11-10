import React from 'react';
import { Button} from 'reactstrap';
import {connect} from 'react-redux';

import { deleteSmurf } from '../actions/index';

const Smurf = (props) => {
    return (
        <div className="smurfCard">
            <h3>Smurf: {props.smurf.name} </h3>
            <p>Age: {props.smurf.age} smurfs old</p>
            <p>Height: {props.smurf.height} </p> 
            <Button color='danger' onClick={() => props.deleteSmurf(props.smurf.id)} >Delete</Button>
        </div>
    )
}

export default connect(() => ({}), { deleteSmurf })(Smurf);