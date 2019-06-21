import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addNewSmurf } from '../actions'
import './App.css';


class App extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>The Dreaded Smurf Village</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurfs => {
              console.log(smurfs)
          return (
          <div className='smurfs-item' key={smurfs.id}>
              <h4>{smurfs.name}</h4>
              <p>{smurfs.age}</p>
              <p>{smurfs.height}</p>
          </div>
          )
          })}
        </div>
        <div className='smurfs-changes'>
          <form className='smurf-form' onSumbit={this.addSmurf}>
              <input 
                  type='text'
                  name='name'
                  value={this.state.newSmurf.name}
                  onChange={this.changeHandler}
                  placeholder='name'
                  />
              <input 
                  type='number'
                  name='age'
                  value={this.state.newSmurf.age}
                  onChange={this.changeHandler}
                  placeholder='age'/>
              <input 
                  type='string'
                  name='height'
                  value={this.state.newSmurf.height}
                  onChange={this.changeHandler}
                  placeholder='height'/>
                  <button onClick={this.addSmurf}>add smurf</button>
          </form>
        </div>
      </div>
    );
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addNewSmurf(this.state.newSmurf)
    console.log(this.props.smurf)
    console.log(this.state.newSmurf)
  }

  changeHandler = event => {
    this.setState({
        newSmurf: {
            ...this.state.newSmurf,
            [event.target.name]: event.target.value 
        }
    })
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  }
}

export default connect(mapStateToProps, { getSmurfs, addNewSmurf })(App);
