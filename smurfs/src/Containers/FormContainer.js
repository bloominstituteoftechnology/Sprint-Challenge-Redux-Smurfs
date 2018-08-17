import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import SmurfForm from '../components/SmurfForm';

const FormContainer = ({ addSmurf }) => {
  return (
    <SmurfForm addSmurf={addSmurf} />
  );
}

export default connect(null, { addSmurf })(FormContainer);
