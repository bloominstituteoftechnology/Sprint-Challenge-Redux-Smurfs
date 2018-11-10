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
}

  render() {
    return (
      <div className="App">
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
