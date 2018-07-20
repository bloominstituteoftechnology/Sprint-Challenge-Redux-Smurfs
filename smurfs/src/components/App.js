import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>Smurf Project #91305930138</h1>
        <SmurfForm />
        {this.props.smurfs.map(smurf =>
          <Smurf key={smurf.id} smurf={smurf}/>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    getSmurfs: state.fetchingSmurfs
  };
};

export default connect (mapStateToProps, { getSmurfs })(App);
