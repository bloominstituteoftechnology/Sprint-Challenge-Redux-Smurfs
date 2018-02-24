import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm'; 
import { rootReducer } from '../actions';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    this.props.rootReducer();
  }

  render() {
    return (
      <div className="App">
        <header class="App-header">
        <h1 className="App-Title">{ `Smurfs from the Village`}</h1>
        <SmurfForm />
        </header>
        <div className="Flex-Container">
        {this.props.fetchingSmurfs ? (
            <button>Cool</button>
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
