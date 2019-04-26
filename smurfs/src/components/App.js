import React, { Component } from 'react';
import './App.css';
/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
import { timingSafeEqual } from 'crypto';

class App extends Component {
    state = {
      name: '',
      age: null,
      height: ''
    }
  
  componentDidMount() {
    this.props.getSmurfs();
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  render() {
    return (
      <div className="App">
      
      <form onSubmit={() => this.props.addSmurf(this.state)}>
        <input type="text" name="name" value={this.state.name} placeholder="Enter name..." onChange={this.changeHandler} />
        <input type="number" name="age" value={this.state.age} placeholder="Enter age..." onChange={this.changeHandler} />
        <input type="text" name="height" value={this.state.height} placeholder="Enter height..." onChange={this.changeHandler} /> 
        <button type="submit">Add Smurf</button>
      </form>

        {this.props.error ? <h2>Error: {timingSafeEqual.prpos.error}</h2> : null }
        {this.props.addingSmurf ? <h2>Adding Smurf...</h2> : null }

        {this.props.fetchingSmurfs ? <h2>Loading...</h2> : null }
        {!this.props.fetchingSmurfs && this.props.smurfs.length ?
            <ul>
              {this.props.smurfs.map(smurf => {
                return (
                  <li>
                    <h2>Name: {smurf.name}</h2>
                    <p>Age: {smurf.age}</p>
                    <p>Hieght: {smurf.height}</p>
                  </li> 
                )
              })}
            </ul> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf
});

export default connect(mapStateToProps, { addSmurf, getSmurfs })(App);
