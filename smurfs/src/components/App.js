import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions'
import './App.css';


class App extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>The Dreaded Smurf Village</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurfs => {
              console.log(smurfs)
          return (
          <div className='smurfs-item' key={smurfs.id}>
              <h1>{smurfs.name}</h1>
              <p>{smurfs.age}</p>
              <p>{smurfs.height}</p>
          </div>
          )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
