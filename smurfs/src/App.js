import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import {
  getSmurfs,
  addSmurf
} from './actions';

import SmurfForm from './components/SmurfForm';
import SmurfList from './components/SmurfList';
class App extends Component {

  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <SmurfForm 
          smurfs={this.props.smurfs}
          addSmurf={this.props.addSmurf}
        />
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSmurfs: () => dispatch(getSmurfs()),
    addSmurf: smurfInfo => dispatch(addSmurf(smurfInfo))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
