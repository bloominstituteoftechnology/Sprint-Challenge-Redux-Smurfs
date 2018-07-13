import React  from 'react'
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import { addSmurf } from '../actions/index';

const AddSmurfForm = () => {
  const initialState = {
    name: '',
    age: '',
    height: '',
  };
  return (
    <SmurfForm initialState={initialState} submitForm={addSmurf} />
  )
}

export default connect(null, { addSmurf })(AddSmurfForm); 

