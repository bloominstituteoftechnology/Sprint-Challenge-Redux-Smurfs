import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { getSmurf } from '../actions';
import Smurf from './Smurf';
import SmurfsForm from './SmurfsForm';

class App extends Component {

  componentDidMount() {
    this.props.getSmurf();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        { this.propsfetchingSmurfs ? <h4>Smurfs COMING</h4> : null }
        <SmurfsForm />
        { this.props.smurfs.map(smurf => {
          return <Smurf key={smurf} smurf={smurf} />
        })}        
      </div>
    );
  }
}

const mapStateToProps = state => {

  return { 
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(mapStateToProps, { getSmurf })(App);
