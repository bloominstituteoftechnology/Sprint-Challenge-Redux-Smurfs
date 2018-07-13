import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchingData } from '../actions/index';
 
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchingData();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? (
          <h2> Finding the Smurfs for you</h2>
        ) : (
          <div>
            <ul>
              {this.props.smurfs.map(smurf => {
                return (
                  <div>
                    <p>Smurf: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                  </div>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfsFetched: state.smurfsFetched,
    error: state.error
  }
}


export default connect(
  mapStateToProps,{ fetchingData})(App);
