import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf, setFormToUpdate } from '../actions';

import './Smurf.scss';

function Smurf({smurf, deleteSmurf, setFormToUpdate, smurfToUpdate}) {

  console.log(smurf);

  return (

    <div className={smurfToUpdate && smurfToUpdate.id === smurf.id ? 'smurf updating' : 'smurf'}>

      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => setFormToUpdate(smurf)}>{smurfToUpdate && smurfToUpdate.id === smurf.id ? 'Cancel' : 'Update'}</button>
      <span className='delete' onClick={() => deleteSmurf(smurf)}>X</span>

    </div>

  );

}

function mapStateToProps(state) {

  return {

    smurfToUpdate: state.smurfToUpdate

  }

}

export default connect(mapStateToProps, { deleteSmurf, setFormToUpdate })(Smurf);
