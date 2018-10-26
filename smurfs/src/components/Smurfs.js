import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';
import { deleteSmurf, singleSmurf } from '../actions';
import UpdateForm from './UpdateForm';

class Smurfs extends Component {
  delete = id => {
    this.props.deleteSmurf(id);
    console.log(id);
  };
  updateSmurfsForm = () => {
    return this.props.updatingSmurfs ? (
      <UpdateForm singleSmurf={this.props.singleSmurf} />
    ) : null;
  };
  getSmurf = smurf => {
    this.props.singleSmurfFunction(smurf);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Welcome to Smurfs</h1>
        <SmurfsList
          smurfs={this.props.smurfs}
          delete={this.delete}
          getSmurf={this.getSmurf}
        />
        <SmurfsForm />
        {this.updateSmurfsForm()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.mainReducer.smurfs,
  updatingSmurfs: state.singleSmurfReducer.updating,
  singleSmurf: state.singleSmurfReducer.singleSmurf
});

const mapDispatchToProps = dispatch => {
  return {
    deleteSmurf: id => dispatch(deleteSmurf(id)),
    singleSmurfFunction: smurf => dispatch(singleSmurf(smurf))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurfs);
