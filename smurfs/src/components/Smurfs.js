import React from 'react';
import { connect } from 'react-redux';

const Smurfs = props => {
   return props.smurfs.map((smurf) => <div key={smurf.id}>{smurf.name}</div>)
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    }
  }
  
export default connect(mapStateToProps, {})(Smurfs);
