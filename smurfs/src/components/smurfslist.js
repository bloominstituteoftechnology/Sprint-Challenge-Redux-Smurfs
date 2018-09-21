import React from 'react';
import PropTypes from 'prop-types';

import Smurf from './smurf';

 const SmurfsList =(props) => {
    return (
        props.smurfsList.map( (smurf, i) => <Smurf smurf={smurf} smurfId={i} key={i} /> )
    );
};

SmurfsList.propTypes = {
    smurfsList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
        height: PropTypes.string
    })).isRequired
};

export default SmurfsList;
