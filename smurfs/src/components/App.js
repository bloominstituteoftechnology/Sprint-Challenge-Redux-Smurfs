import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getSmurfs, addSmurf} from '../actions/index';
import Smurf from './Smurf';

import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      name: undefined,
      age: undefined,
      height: undefined
    };
  }
  
  componentDidMount()
  {
    this.props.getSmurfs("http://localhost:3333/smurfs");
  }

  inputSmurf = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  addSmurf = (e) => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(smurf);
    this.setState({name: undefined, age: undefined, height: undefined});
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        {this.props.smurfs.map(s => {
          return <Smurf key={Math.random()} smurf={smurf} />;
        })}

        <form>
          <input onChange={this.inputSmurf} value={this.state.name} name="name"/>
          <input onChange={this.inputSmurf} value={this.state.age} name="age"/>
          <input onChange={this.inputSmurf} value={this.state.height} name="height"/>

          <button onClick={this.addSmurf}> Add </button>
        </form>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App);
