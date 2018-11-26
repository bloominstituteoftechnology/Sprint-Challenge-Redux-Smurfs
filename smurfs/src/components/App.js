import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import { connect } from "react-redux";
import {fetchSmurfs} from '../actions';
import AddSmurfForm from './AddSmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  // state= {
  //   name: '',
  //   age: '',
  //   height: ''
  // }
  

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  // inputHandler = e => {
  //   e.preventDefault();
  //   this.setState({[e.target.name]: e.target.value})
  // }

  // addNewSmurf = e => {
  //   e.preventDefault();
  //   this.props.addSmurf(this.state)
  
  // }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs />
        <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    error: state.errorMessage
  }
}

export default connect(
  mapStateToProps,
  {fetchSmurfs}
)(App)
