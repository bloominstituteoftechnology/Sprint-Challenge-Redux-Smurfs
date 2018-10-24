import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf, deleteSmurf} from '../actions'
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
 
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitHandler = event => {
    event.preventDefault();
    if (this.state.name !== '' && this.state.age !== '' && this.state.height !== '') {
      let smurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      }
      this.props.addSmurf(smurf);
      event.target.reset();
    }
    else {alert('Please fill out the form!')}
  }


  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <Smurfs smurfs={this.props.smurfs} deleteHandler={this.props.deleteSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    got: state.got
  }
}

export default connect(mapStateToProps, {getSmurfs, addSmurf, deleteSmurf})(App);