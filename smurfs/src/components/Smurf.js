import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
  return (
    <div className='smurf'>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age} smurf years old</p>
      <p>{props.smurf.height} cm tall</p>
      <button className='delete-button' onClick={() => props.deleteSmurf(props.smurf.id)}>
        Byebye {props.smurf.name}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    deletingSmurf: state.deletingSmurf
  };
};

export default connect(mapStateToProps, { deleteSmurf })(Smurf);