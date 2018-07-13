import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData, addData } from '../actions';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>

        {this.props.addingSmurf ? (
          <p>Adding Smurf, please wait...</p>
        ) : (
          <SmurfForm />
        )}

        {this.props.fetchingSmurfs ? (
          <p>Loading, please wait...</p>
        ) : (
          <Smurfs smurfs={this.props.smurfs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    fetchedSmurfs: state.fetchedSmurfs,
    addingSmurf: state.addingSmurf,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  fetchData, addData
})(App);
