import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { deleteSmurf, updateSingleSmurf } from '../actions';


class Smurfs extends Component {
  handleDeleteSmurf = id => {
    
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="smurfs">
      {this.props.smurfs ? this.props.smurfs.map((smurf) => {
          return (
              <div className="smurf" key={smurf.id}>
                <div className="delete-button" onClick={() => {this.handleDeleteSmurf(smurf.id)}}>
                </div>
          
        <div className="smurf__name">{smurf.name}</div>
        <div>age: {smurf.age}</div>
        <div>height: {smurf.height}</div>
        </div>
            )}
          ):
        <div></div> }
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingSmurf: state.smurfsReducer.deletingSmurf,
    error: state.smurfsReducer.error,
  };
};

export default connect(mapStateToProps, {
  deleteSmurf,
  updateSingleSmurf,
  
})(Smurfs);