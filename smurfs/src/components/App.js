import React, { Component } from 'react';
import './App.css';
/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class App extends Component {

componentDidMount() {
  this.props.getSmurfs();
    // state = {
    //   name: '',
    //   age: '',
    //   height: ''
    // }
}

  render() {
    return (
      <div className="App">

      {/* 
      <form onSubmit={}>
        <input type="text" name="name" value={this.state.name} placeholder={Enter name...} onChange={} />
        <input type="text" name="age" value={this.state.age} placeholder={Enter age...} onChange={} />
        <input type="text" name="height" value={this.state.name} placeholder={Enter height...} onChange={} /> 
        <button type="submit">Add Smurf</button>
      </form>
    */}


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


        {/* {this.props.fetchingSmurfs ? <h2>Loading...</h2> : null }
        {!this.props.fetchingSmurfs && this.props.smurfs.length
          ? 
            <ul>
              {this.props.smurfs.map(smurf => {
                <li>
                  <h2>Name: {smurf.name}</h2>
                  <p>Age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
                </li>
              })}
            </ul> 
          : 
            null } */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
});

export default connect(mapStateToProps, { getSmurfs })(App);
