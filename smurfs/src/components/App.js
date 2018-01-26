import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

import Header from './Header';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';

import logo from '../assets/logo.svg';

import '../styles/App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  addSmurfHandler = newSmurf => {
    this.props.addSmurf(newSmurf);
  };

  // deleteSmurf = index => {
  //   this.props.deleteSmurf(index);
  // };

  // editSmurf = (smurf, index) => {
  //   this.props.editSmurf(smurf, index);
  // };

  render() {
    return (
      <div className="App">
        <Header />

        <AddSmurf
          className="App__addSmurf"
          addSmurfHandler={this.addSmurfHandler}
        />

        <Smurfs className="App__smurfs" smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
