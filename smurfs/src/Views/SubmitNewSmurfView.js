import React from 'react';
import { connect } from 'react-redux';

import SubmitNewSmurf from '../components/SubmitNewSmurf';

import { addNewSmurf } from '../actions';

const SubmitNewSmurfView = props => {
    return <SubmitNewSmurf addNewSmurf={props.addNewSmurf} />
}

export default connect(null, { addNewSmurf })(SubmitNewSmurfView);