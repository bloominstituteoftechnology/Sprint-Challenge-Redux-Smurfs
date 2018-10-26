import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchSmurfs, addSmurf } from '../actions'
import List from './List'
import Form from './Form'

class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount = () => {
    this.props.fetchSmurfs()
  }

  handleChangeEvent = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addSmurf = () => {
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(smurf)
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <Form 
          handleChangeEvent={this.handleChangeEvent}
          addSmurf={this.addSmurf}
        />
        <List 
          smurfs={this.props.smurfs}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps, { fetchSmurfs, addSmurf }
)(App);
