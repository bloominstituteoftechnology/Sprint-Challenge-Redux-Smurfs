import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

function Smurf({smurf, deleteSmurf}) {

  return (

    <div className='smurf'>

      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <span className='delete' onClick={() => deleteSmurf(smurf)}>X</span>

    </div>

  );

}

export default connect(null, { deleteSmurf })(Smurf);
