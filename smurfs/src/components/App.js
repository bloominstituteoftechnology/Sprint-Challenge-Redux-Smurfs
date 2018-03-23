import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li key={smurf.id}>
                <div>Name: {smurf.name}</div>
                <div>Age: {smurf.age}</div>
                <div>Height: {smurf.height}</div>
              </li>
            );
          })}
        </ul>
        <div className="Form">
          <form>
            <h4>Add A Smurf!</h4>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="age"
              placeholder="Age"
              value={this.state.age}
              onChange={e => this.change(e)}
            />
            <br />
            <input
              name="height"
              placeholder="Height"
              value={this.state.height}
              onChange={e => this.change(e)}
            />
            <br />
            <button className="add-btn" onClick={e => this.onSubmit(e)}>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    creating: state.creating,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
