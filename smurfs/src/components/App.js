import React, { Component } from 'react';

import Smurfs from './smurfs';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    error: null
  };
  componentDidMount() {
    this.props.getSmurfs();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', this.state)
      .then(res => res.data)
      .catch(err => this.setState({ error: err.response.data.Error }));
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className="App container">
        <section className="hero is-primary">
          <div className="hero-body">
            <h4 className="title">Smurfs</h4>
          </div>
        </section>
        <Smurfs {...this.props} />
        {this.state.error !== null ? this.state.error : ''}
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name.."
          />
          <input
            className="input"
            type="number"
            name="age"
            onChange={this.handleChange}
            placeholder="Age.."
          />
          <input
            className="input"
            type="number"
            name="height"
            onChange={this.handleChange}
            placeholder="Height.."
          />
          <button type="submit" className="button is-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    fetching: state.smurfsReducer.fetching,
    error: state.smurfsReducer.error
  };
};

export default connect(
  mstp,
  { getSmurfs }
)(App);
