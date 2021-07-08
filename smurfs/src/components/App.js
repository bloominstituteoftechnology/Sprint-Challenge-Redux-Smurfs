import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_smurfs } from '../actions';
import SmurfForm from './smurfForms.js';
import './App.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  
  componentDidMount(){
    this.props.fetch_smurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <ul>
          {this.props.smurfs.map((smurf)=> {
            return <li key = {smurf.id}> 
              <div>{smurf.name}</div> 
              <div>age: {smurf.age}</div> 
              <div>height: {smurf.height}</div> 
            </li>
          })}
        </ul>
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}
export default connect( mapStateToProps,{ fetch_smurfs })(App);
