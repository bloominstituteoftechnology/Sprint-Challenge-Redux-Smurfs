import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions';
import { createSmurf } from '../actions';
import { connect } from 'react-redux';
import Form from './form';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount(){
    this.props.getSmurfs();
    this.props.createSmurf();
  }
  render() {


    return (
      <div>
        <Form />
      { this.props.smurfs.map(smurf=><div>{smurf.name}</div>)}
      { this.props.smurfs.map(smurf=><div>{smurf.age}</div>)}
      { this.props.smurfs.map(smurf=><div>{smurf.height}</div>)}
      </div>
    );
  }
  
}


const mapState = state => {
  return {
    smurfs: state.smurfs
  }
}
export default connect(mapState, {getSmurfs, createSmurf})(App);
