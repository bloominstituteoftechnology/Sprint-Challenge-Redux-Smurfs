import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurf from './Smurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>The Village</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>
          { this.props.smurfs.map( smurf => {
            return <Smurf smurf={smurf} key={smurf.id} />
          })}
          {this.props.pending ? <h1>LOADING</h1> : null}
        </div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.fetchingSmurfs,
    
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
