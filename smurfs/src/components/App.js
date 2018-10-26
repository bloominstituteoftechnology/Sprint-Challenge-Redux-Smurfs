import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, postSmurf } from '../actions/';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: 100,
      height: '',
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  addSmurf = () => {
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    }
    this.props.postSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: '',
    })
  }

  handleNewSmurf = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <div>
          {this.props.fetching ? (
            <p>LOADING SMURFS . . . </p>
            ) : (
            <div>
              {this.props.smurfs.map(smurf => {
                return (<div key={smurf.name}>
                  <h2>Name: {smurf.name}</h2>
                  <p>age: {smurf.age}</p>
                  <p>height: {smurf.height}</p>
                </div>)
              })}
            </div>
          )}
        </div>
        <form>
          Name:
          <input
            type="text"
            onChange={this.handleNewSmurf}
            value={this.state.name}
            name='name'
          /><br />
          Age:
          <input
            type="text"
            onChange={this.handleNewSmurf}
            value={this.state.age}
            name='age'
          /><br />
          Height:
          <input
            type="text"
            onChange={this.handleNewSmurf}
            value={this.state.height}
            name='height'
          />
        </form>
        <button onClick={ this.addSmurf }>Submit New Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, { fetchSmurfs, postSmurf })(App);
