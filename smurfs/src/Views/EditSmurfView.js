import React from 'react';
import { connect } from 'react-redux';

import EditSmurf from '../components/EditSmurf';

import { editSmurf } from '../actions';

const EditSmurfView = props => {
    return <EditSmurf editSmurf={props.editSmurf} smurfId={props.smurfId} />
}

export default connect(null, { editSmurf })(EditSmurfView);