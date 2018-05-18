
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor } from '../actions';
 import './App.css';

 class App extends Component {

   componentDidMount() {
     this.props.fetcher('http://localhost:3333/smurfs');
   }

  render() {
    return (
    <div />
    )
  }
}



const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    appState: state.appState,
    error: state.error,
    editIndex: state.editIndex
  }
}

 export default connect(mapStateToProps, {
   fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor
 })(App);
