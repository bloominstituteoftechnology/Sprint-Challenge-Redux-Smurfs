import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import SmurfsForm from './Form';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.fetchingSmurfs ? (
          <div> Loading da smurfz </div>
        ) : (
          <div>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.index}>
                <p>Name: {smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
              </div>
            )
          })}
        </div>
      )}
      <SmurfsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

 export default connect(mapStateToProps, {fetchSmurfs})(App);