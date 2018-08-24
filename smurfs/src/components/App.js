import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {getSmurfs} from '../actions';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {

  state = {
    name: '',
    age: null,
    height: ''
  };

  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">

      <input placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleChanges} />
      <input placeholder="Age" type="text" age="age" value={this.state.name} onChange={this.handleChanges} />
      <input placeholder="Height" type="text" height="height" value={this.state.name} onChange={this.handleChanges} />
      {this.props.fetchingSmurfs ? <h2>Getting Smurfs </h2> : null}

      {
        !this.props.fetchingSmurfs && this.props.smurfs.length ? 
      <ul>
        {this.props.smurfs.map(smurf => (
        <li>
          <h2>Name: {smurf.name}</h2>
          <h2>Age: {smurf.age}</h2>
          <h2>Height: {smurf.height}</h2>
          </li>
        ))}
        </ul> : 
        null
      }
      </div>
    );
  }
}

const mapStateToProps = state => {
return {
smurfs: state.smurfs,
fetchingSmurfs: state.fetchingSmurfs,

}};

export default connect(mapStateToProps, {getSmurfs})(App);
