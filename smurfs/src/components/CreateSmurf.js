import React, { Component } from 'react'
import { connect } from 'react-redux'

import {createSmurf} from "../actions";

class CreateSmurf extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: 0,
    height: '',
    }
  }


  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createSmurf(this.state)
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="age"/>
        <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="height"/>
   <button type="submit">Update</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { createSmurf }) (CreateSmurf);
