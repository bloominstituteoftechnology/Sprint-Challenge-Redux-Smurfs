import React from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';


const Smurf = (props) => {
    const { smurf } = props;

    const editSmurf = () => {

    }
    const deleteSmurf = () => {
        console.log('ID', smurf.id)
        props.deleteSmurf(smurf.id);

    }

    return (
        
        <div className={'smurf'}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button onClick={editSmurf}>Edit</button>
            <button onClick={deleteSmurf}>Delete</button>
        </div>
    )
    
}


export default connect(null, { deleteSmurf })(Smurf);