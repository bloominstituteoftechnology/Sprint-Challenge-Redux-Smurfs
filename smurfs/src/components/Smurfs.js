import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';
import { deleteSmurf } from '../actions';

class Smurfs extends Component {
  delete = id => {
    this.props.deleteSmurf(id);
    console.log(id);
  };
  render() {
    return (
      <div>
        <h1>Welcome to Smurfs</h1>
        <SmurfsList smurfs={this.props.smurfs} delete={this.delete} />
        <SmurfsForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

const mapDispatchToProps = dispatch => {
  return {
    deleteSmurf: id => dispatch(deleteSmurf(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Smurfs);
