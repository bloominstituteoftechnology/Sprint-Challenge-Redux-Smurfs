import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import {getSmurfs} from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
       <header>
        <h1 className="Title">SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <Smurfs />
       </header>
       {this.props.error ? <h3>Error Getting Smurfs</h3> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  smurfs: state.smurfs,
  fetching: state.gettingSmurfs,
  error: state.error
  }
};
 export default connect(mapStateToProps,{getSmurfs})(App);
