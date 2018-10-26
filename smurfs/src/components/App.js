import React, { Component } from 'react';
import './App.css';
import  { fetchingSmurfs, addSmurf } from '../actions';
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
      name: '' ,
      age: '',
      height: ''
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
    const { name, age, height } = this.state;
    addSmurf({ name, age, height});
    this.setState({ name: '', age: '', height: ''})
    
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
            </div>
          )
        })
      }
              <form onSubmit = { () => this.handleAddNewSmurf() }>

              <input
                type = "text"
                placeholder = "Smurf Name"
                value = {this.state.name}
                name = "name"
                onChange = {this.handleSmurfInput} 
              />
              <input 
                type="text"
                placeholder="Age"
                value={this.state.age}
                name="age"
                onChange={this.handleSmurfInput}
              />
              <input 
                type="text"
                placeholder="Height"
                value={this.state.height}
                name="height"
                onChange={this.handleSmurfInput}
              />

          <button onClick={ () => this.handleAddNewSmurf()}>Add Smurf</button>
        </form>
              
            </div>
          )
      
     
   
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