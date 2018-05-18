import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from "../actions";
import logo from '../logo.svg';
import SmurfForm from './SmurfForm';

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
        {this.props.error !== null ? <h3>{this.props.error}</h3> : null}
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.smurfs.map(smurf => {
              return <li key={smurf.name}>{smurf.name}</li>;
            })}
            <SmurfForm />
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetchingSmurfs,
    fetched: state.fetchedSmurfs,
    adding: state.addingSmurf,
    added: state.addedSmurf,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);