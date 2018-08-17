import React from 'react';
import { connect } from 'react-redux';
import { addSmurf, updateSmurf, cancelEdit } from '../actions';
import SmurfFormWrapper from '../components/SmurfForm';

const FormContainer = ({ isEditing, addSmurf, smurf, updateSmurf, cancelEdit }) => {
  return (
    <React.Fragment>
      {isEditing ? (
        <SmurfFormWrapper {...smurf} update={updateSmurf} cancel={cancelEdit} mode="editing" />
      ) : (
        null
      )}
      {!isEditing ? (
        <SmurfFormWrapper addSmurf={addSmurf} mode="adding" />
      ) : (
        null
      )}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isEditing: state.isEditingSmurf,
    smurf: state.selectedSmurf
  }
};

export default connect(mapStateToProps, { addSmurf, updateSmurf, cancelEdit })(FormContainer);
