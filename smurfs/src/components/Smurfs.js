import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const Smurfs = props => {
  return (
    <div className='smurfs-container'>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            key={smurf.name}
            id={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(Smurfs);