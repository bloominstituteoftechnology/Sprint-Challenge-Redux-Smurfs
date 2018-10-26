import React, { Component } from 'react';
import './App.css';
import  { fetchingSmurfs } from '../actions';
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      newSmurf: ''
    }
  }
  componentDidMount() {
    this.props.fetchingSmurfs();
  }

  handleSmurfInput =  event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAddNewSmurf = event => {
    event.preventDefault();
    this.props.addingSmurf(this.state.newSmurf, addingSmurf: false)
  }
  render() {
    if(this.props.fetchingSmurfs) {
      <h2>Getting Smurfs....</h2>
    }
    return (
      <div className="App">
        <h1>SMURFS Redux Village</h1>
        {this.props.smurfs.map(smurf => {
          return(
            <div key={smurf.id + 1}>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
              
              <form onSubmit = { this.handleAddNewTodo }>

              <input
                type = "text"
                placeholder = "Smurf Name"
                value = { this.state.newSmurf }
                name = "name"
                onChange = { this.handleSmurfInput } 
              />
              <input 
                type="text"
                placeholder="Age"
                value={this.state.newSmurf}
                name="age"
                onChange={this.handleSmurfInput}
              />
              <input 
                type="text"
                placeholder="Height"
                value={this.state.newSmurf}
                name="height"
                onChange={this.state.newSMurf}
              />

          <button onClick = { this.handleAddNewSmurf }>Add Smurf</button>
        </form>
              
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  { fetchingSmurfs }
)(App);