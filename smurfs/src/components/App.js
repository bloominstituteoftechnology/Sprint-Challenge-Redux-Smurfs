import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { fetchSmurfs } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
         <header className="App-header">
          <h1>SMURFS</h1>
          <SmurfForm />
        </header>
        {this.props.error ? <h3>Error Fetching Smurfs</h3> : null}
        <div>
          {this.props.fetchingSmurfs ? (
            <p>Collecting Smurf Data</p>
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    error: state.smurfsReducer.error,
    fetchingSmurfs: state.smurfsReducer.fetchingSmurfs
  };
};

export default connect(mapDispatchToProps, { fetchSmurfs })(App);