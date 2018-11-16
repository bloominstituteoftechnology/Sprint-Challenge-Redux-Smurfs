import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createSmurf } from '../actions/smurfsActions'

class CreateSmurf extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      nickname: '',
      description: '',
      img:'',
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
      <p>CREATE SMURF FORM</p>
        <input type="text" name="img" value={ this.state.img } onChange={this.inputHandler} placeholder="Image"/>
        {/* <input type="text" name="img" value={"../images/" && this.state.img} onChange={this.inputHandler} placeholder="Image"/> */}
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age"/>
        <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="Height"/>
        <input type="text" name="height" value={this.state.description} onChange={this.inputHandler} placeholder="Description"/>
        <button type="submit">Add Smurf</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { createSmurf: createSmurf })(CreateSmurf);