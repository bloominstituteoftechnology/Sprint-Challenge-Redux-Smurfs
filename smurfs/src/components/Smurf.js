import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf, setFormToUpdate } from '../actions';

function Smurf({smurf, deleteSmurf, setFormToUpdate}) {

  return (

    <div className='smurf'>

      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => setFormToUpdate(smurf)}>Update</button>
      <span className='delete' onClick={() => deleteSmurf(smurf)}>X</span>

    </div>

  );

}

export default connect(null, { deleteSmurf, setFormToUpdate })(Smurf);
