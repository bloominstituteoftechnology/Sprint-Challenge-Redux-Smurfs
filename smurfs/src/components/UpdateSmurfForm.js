import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateSmurf } from '../actions/smurfsActions'

class UpdateSmurf extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: null,
      height: null,
      img:''
    }
  }

  componentDidMount(){
    const { smurfs, match } = this.props
    const smurf = smurfs.find( item => item.id === Number(match.params.id))
    this.setState(smurf)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.updateSmurf(this.state)
  }

  handleAddSmurf = _ => {
    const { name, age, height, img} = this.state;
    this.props.createFriend({ name, age, height, img });
    this.setState({ name: '', age: '', height: '', img: '' })
  }

  render(){
    return (
      <form onSubmit={ this.submitHandler}>
      <p>UPDATE SMURF FORM</p>
        <input type="text" name="img" value={this.state.img} onChange={this.inputHandler} placeholder="Image"/>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="age" value={this.state.age} onChange={this.inputHandler} placeholder="Age"/>
        <input type="text" name="height" value={this.state.height} onChange={this.inputHandler} placeholder="Height"/>
        <input type="text" name="height" value={this.state.description} onChange={this.inputHandler} placeholder="Description"/>
        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    updateSmurf: state.updateSmurf,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { updateSmurf })(UpdateSmurf)