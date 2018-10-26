import React, { Component } from 'react';
import './App.css';

import SmurfForm from './SmurfsForm'; 
import { fetchSmurfs } from '../actions'; 
import { connect } from 'react-redux'; 
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount(){
    this.props.fetchfriends(); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Friends</h1>
        <SmurfForm />
        </header>
        <div>
        {this.props.isFetching ? (
          <h1>Loading</h1>
        ): (
         
        )}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs, 
    error: state.error, 
    isFetching: state.isFetching
  }
}

export default connect (mapStateToProps, {fetchSmurfs})(App); 