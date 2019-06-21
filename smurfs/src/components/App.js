import React, { Component } from 'react';
import './App.css';

import { addSmurf, fetchSmurfs, /*deleteSmurf*/ } from "../actions"
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


class App extends Component {
  state= {

    name: '',
    age: '',
    height: '',
    id: '',
    newSmurf: []
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>

        <div className="smurf-list">
          {this.props.smurfs.map((smurf, id) => (
            <div key={id}>
              <h2>Name: {smurf.name}</h2>
              <h2>Age: {smurf.age}</h2>
              <h2>Height: {smurf.height}</h2>
              {/* <button onClick={e => this.deleteSmurf(e, smurf)}>X</button> */}

            </div>
          ))}
        </div>

        <form className="smurf-form">
          <div>
            <input 
              placeholder="New Smurfy Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChanges}
            />
          </div>
          <div>
            <input 
              placeholder="New Smurfy Age"
              name="age"
              value={this.state.age}
              onChange={this.handleChanges}
            />
          </div>
          <div>
            <input 
              placeholder="New Smurfy Height"
              name="height"
              value={this.state.height}
              onChange={this.handleChanges}
            />
          </div>
        </form>
        <button onClick={this.addSmurf}>Add New Smurf</button>
      </div>
    );
  };

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
  }

  // deleteSmurf = (e, smurf) => {
  //   e.preventDefault();
  //   this.props.deleteSmurf(smurf)
  // }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  }
};

export default connect(
  mapStateToProps,
  {
    addSmurf,
    fetchSmurfs,
    // deleteSmurf
  }
)(App);

