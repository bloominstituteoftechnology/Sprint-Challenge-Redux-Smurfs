import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, addSmurf, editSmurf, deleteSmurf } from '../actions';
import SmurfList from './SmurfList';
import Form from './Form';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

 
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Form 
          addSmurf={this.props.addSmurf}
          editSmurf={this.props.editSmurf} 
        />
        <SmurfList 
          smurfs={this.props.smurfs}
          deleteSmurf={this.props.deleteSmurf} 
        />
      </div>
    );
  }

}

function mapDispatchToProps(dispatch){
  return {
    fetchSmurfs: () => dispatch(fetchSmurfs()),
    addSmurf: newSmurf => dispatch(addSmurf(newSmurf)),
    editSmurf: (editedSmurf, id) => dispatch(editSmurf(editedSmurf, id)),
    deleteSmurf: id => dispatch(deleteSmurf(id)),
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);