import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs} from '../actions';

const Smurfs = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            key={smurf.name}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        );
      })}
    </div>
  );
}



export default connect(null, {getSmurfs})(Smurfs);