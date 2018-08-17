import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions';
import AddSmurfForm from './AddSmurfForm';
import UpdateSmurfForm from './UpdateSmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1>Smurfs 2.0 w/ Redux</h1>
          <ul>
          {this.props.smurfs.map(smurf => <li key={smurf.name}> Name: {smurf.name}, Age: {smurf.age}, Height: {smurf.height}&nbsp;
          <button>Update</button>
          <UpdateSmurfForm id={this.props.smurfs.findIndex(person => person.name === smurf.name)} />
          <button onClick={() => {this.props.deleteSmurf(this.props.smurfs.findIndex(person => person.name === smurf.name)); this.forceUpdate();}}>Delete</button>
          <hr/>
          </li>)}
          </ul>
          <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(App);
