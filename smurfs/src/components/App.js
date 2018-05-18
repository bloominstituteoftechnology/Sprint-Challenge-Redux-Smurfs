
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from './actions/index';


class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Smurf Friends</h1>
        </header>
        <div className="App-intro">
        <ul>
            {this.props.chars.map(smurf => {
              return <li key={smurf.name}>{smurf.name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
