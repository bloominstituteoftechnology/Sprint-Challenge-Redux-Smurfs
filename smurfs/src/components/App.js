import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/index';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurf()
  }
  
  render() {
    return (
      <div>
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = {
	getSmurf,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)