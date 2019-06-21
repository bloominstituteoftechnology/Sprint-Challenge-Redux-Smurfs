import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addNewSmurf, deleteSelectedSmurf } from '../actions'
import './App.css';

class App extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: '',
    },
    selectedSmurf: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>The Dreaded Smurf Village</h1>
        <div className='smurfs-container'>
          {this.props.smurfs.map(smurf => {
              console.log('map of smurfs', smurf)
              this.setState({selectedSmurf: smurf.id})
          return (
          <div className='smurf-item' key={smurf.id}>
            <h4>{smurf.name}</h4>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <div className='smurf-change'>
            <button onClick={this.deleteSmurf}>x</button>
            </div>
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
    console.log('state of newsmurf on addsmurf', this.state.newSmurf)
    this.props.addNewSmurf(this.state.newSmurf)
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    })
    console.log('this.props.smurf in app.js', this.props.smurf)
    console.log('this.state.newSmurf in app.js', this.state.newSmurf)
  }

  deleteSmurf = (event) => {
    event.preventDefault();
    // this.setState({selectedSmurf: smurf.id})
    console.log('event logger',event.smurf.id)
    this.props.deleteSelectedSmurf(smurfID)
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

export default connect(mapStateToProps, { getSmurfs, addNewSmurf, deleteSelectedSmurf })(App);
