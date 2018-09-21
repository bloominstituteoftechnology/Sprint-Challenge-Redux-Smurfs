import React from 'react';
import PropTypes from 'prop-types';

import Smurf from './Smurf';

function SmurfsList(props) {
    if (!props.smurfsList || !props.smurfsList.length) {
        return <h1>A lonely village... You must populate the village young one.</h1>
    };

    return (
        <div>
            {props.smurfsList.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} handleDelete={props.handleDelete} toggle={props.toggle} modal14={props.modal14} />
            ))}
        </div>
    );
};

export default SmurfsList;