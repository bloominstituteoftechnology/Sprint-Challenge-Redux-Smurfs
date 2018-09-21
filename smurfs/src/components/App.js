import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import { fetchSmurf } from '../actions';
import SmurfForm from './SmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurf();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <h1>Loading...</h1>
        ) : (
            <div>
              {this.props.smurfs.map(smurfs => {
                return (

                  <div key={smurfs.name}>
                    <h3>Name: {smurfs.name} </h3>
                    <h3>Age: {smurfs.age} </h3>
                    <h3>Height: {smurfs.height} </h3>
                    <SmurfForm  />

                  </div>

                )

              })}
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetching,
    adding: state.adding,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurf,
  }
)(App);