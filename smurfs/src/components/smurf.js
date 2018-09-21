import React from 'react';
import PropTypes from 'prop-types';

const Smurf = (props) => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
};

Smurf.propTypes = {
    smurf: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, 
        height: PropTypes.string.isRequired
    }).isRequired,
    smurfId: PropTypes.number.isRequired
};

export default Smurf;
