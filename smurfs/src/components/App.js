import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf, deleteSmurf, editSmurf} from '../actions'
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
      editSmurf: null,

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

      if (this.state.editSmurf !== null) {
        this.props.editSmurf(smurf, this.state.editSmurf.id)
        alert('Edits submitted.')
      }
      else {
        this.props.addSmurf(smurf);
        alert('New smurf added! Scroll down to see.')
      }
      event.target.reset();
      this.setState({
        name: '',
        age: '',
        height: '',
        editSmurf: null,
      })
    }
    else {alert('Please fill out the form!')}
  }

  editHandler = (smurf) => {
    alert('Edit mode activated. Please fill out the form.')
    this.setState({
      editSmurf: smurf,
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm changeHandler={this.changeHandler} submitHandler={this.submitHandler} editSmurf={this.state.editSmurf}/>
        {this.props.got ? <Smurfs smurfs={this.props.smurfs} deleteHandler={this.props.deleteSmurf} editHandler={this.editHandler}/> : <div>Wrangling some smurfs...</div>}
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

export default connect(mapStateToProps, {getSmurfs, addSmurf, deleteSmurf, editSmurf})(App);