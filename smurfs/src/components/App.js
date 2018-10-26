import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';

import Smurfs from './Smurfs';
import './App.css';
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
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addSmurf = e => {
    e.preventDefault();

    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  }

  render() {
    const { smurfs, fetchingSmurfs, error } = this.props;
    const { name, age, height } = this.state;

    if (fetchingSmurfs) {
      return <h2 className="App">Loading Smurfs...</h2>;
    } else if (error) {
      return <h2 className="App">404 Smurfs Not Found</h2>;
    } else {
      return (
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>

          <h3>Add new Smurf</h3>

          <form onSubmit={this.addSmurf}>
            <input
              placeholder="Enter Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleInput}
            />

            <input
              placeholder="Enter Age"
              type="text"
              name="age"
              value={age}
              onChange={this.handleInput}
            />

            <input
              placeholder="Enter Height"
              type="text"
              name="height"
              value={height}
              onChange={this.handleInput}
            />

            <button type="submit">Add Smurf</button>
          </form>

          <Smurfs smurfs={smurfs} deleteSmurf={this.deleteSmurf} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log('State from App', state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, deleteSmurf })(App);
