import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="smurfGet">
        {this.props.smurfs.map(smurfs => {
          return (
            <li key={smurfs.id}>
            <div className="smurfies">This Smurf's name is <strong> {smurfs.name}</strong>..
             Well, {smurfs.name} is <strong>{smurfs.age}</strong> eons old and stands <strong>{smurfs.height}</strong> tall.</div>
            </li>
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getFriends })(App);
