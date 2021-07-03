
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'; 
import { fetchSmurfs } from '../actions'; // import fetchSmurfs
import Smurf from './Smurf';
import SmurfForm from './SmurfForm.js';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() { // trigger our action
    this.props.fetchSmurfs(); // call fetchSmurfs function
  }

  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <h1 className= "App-title">WELCOME TO SMURF WORLD!</h1>
        </div>
        {/* create a smurf form */}
        <SmurfForm />          
        {/* pass smurfs down into a component and iterate over that list of data */}
        {this.props.smurfs.map((smurf, index) => { // for each smurf 
          return <Smurf key={index} smurf={smurf} />;  // create a Smurf component that passes down all of the smurf data
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {  // build mapStateToProps function
  return {  // return the state we want our App to be concerned with 
    fetchSmurfs: state.fetchingSmurfs,  // state of fetching smurfs
    smurfs: state.smurfs  // state of smurfs 
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);  // connect to fetchSmurfs