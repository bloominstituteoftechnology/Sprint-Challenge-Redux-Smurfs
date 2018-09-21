import React from 'react';
import PropTypes from 'prop-types';

const Smurf = (props) => {
    return (
        <div>
            <h3 onClick={ () => props.editHandler(props.smurf) }>{props.smurf.name}</h3>
            <p style={{fontWeight: 'bolder'}} onClick={ () => props.deleteSmurf(props.smurf.id) } >X</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
};

Smurf.propTypes = {
    smurf: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired, 
        height: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired,
    editHandler: PropTypes.func.isRequired,
    deleteSmurf: PropTypes.func.isRequired
};

export default Smurf;
