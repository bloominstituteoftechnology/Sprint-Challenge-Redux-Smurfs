import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
        </header>
        {this.props.fetchingSmurfs ? (
          <h3>Hold tight, we're fetching your smurfs...</h3>
        ) : (
          <div className="App-intro">
            {this.props.smurfs.map(smurf => {
              return <Smurf key={smurf.name} smurf={smurf} />;
            })}
          </div>
        )}
        {this.props.error !== '' ? <h4>{this.props.error}</h4> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);
