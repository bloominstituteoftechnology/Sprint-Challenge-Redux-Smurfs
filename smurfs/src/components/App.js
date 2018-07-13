import React, { Component } from 'react';
import './App.css';
import SmurfsForm from './SmurfsForm';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurfs from './Smurfs';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`Smurfs`}</h1>
          <SmurfsForm />
        </header>
        {this.props.error ? <h3>Error Getting Smurfs</h3> : null}
        <div className="Flex-Container">
          {this.props.fetchingSmurfs ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    fetchingSmurfs: smurfsReducer.fetchingSmurfs
  };
};

export default connect( mapStateToProps, {getSmurfs})(App);
