import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchSmurfs } from '../actions';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    console.log("this.props:", this.props)
    return (
      <div className="App">
        <div>
          <h1 style={{color: 'white', textShadow: '2px 2px 4px #000000'}}>Welcome to Smurf Village!</h1>
          <p style={{color: 'white', textShadow: '2px 2px 4px #000000'}}>Join the Village:</p>
          <AddSmurf />
          {this.props.smurfs.map(smurf => {
            return (
                <ul className="smurf-card"key={smurf.id}>
                  <li className="smurf-list">{smurf.name}</li>
                  <li>{smurf.age} smurfs old</li>
                  <li>{smurf.height} smurfs tall</li>
                </ul>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("State:", state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}
export default connect(mapStateToProps, { fetchSmurfs })(App);
