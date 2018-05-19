import React, { Component } from 'react';
import './App.css';
import { fetchSmurfs, createSmurf } from '../actions';
import { connect } from 'react-redux';
import AddSmurf from './AddSmurfs';
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
    return <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Smurf Village</h1>
      </header>
      <div>
        <AddSmurf />
      </div>
      <div className="smurf-container">
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name} className="smurf-card">
              <ul>
                <li><span className="title" >Name:</span> {smurf.name}</li>
                <li><span className="title" >Age:</span> {smurf.age}</li>
                <li><span className="title" >Height:</span> {smurf.height}</li>
              </ul>
              <button className="edit-button">Edit</button>
              <button className="remove-button">Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  }
}

export default connect(mapStateToProps, { fetchSmurfs, createSmurf })(App);
