import React, { Component } from 'react';
import './App.css';
import SmurfsForm from './SmurfsForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>SMURFS REDUX VILLAGE</h1>
        <SmurfsForm />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     fetching: state.fetchingSmurfs,
//     smurfs: state.smurfs
//   };
// };

export default App;
