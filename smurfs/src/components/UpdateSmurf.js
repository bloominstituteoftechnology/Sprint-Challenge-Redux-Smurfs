import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateSmurf } from '../actions'

class UpdateSmurf extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      height: '',

    }
  }

  componentDidMount(){
    const { smurfs, match } = this.props
    const smurfs = smurf.find( item => item.id === Number(match.params.id))
    this.setState(smurf)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.updateAvenger(this.state)
  }
  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name"/>
        <input type="text" name="nickname" value={this.state.nickname} onChange={this.inputHandler} placeholder="Nickname"/>
        <input type="text" name="description" value={this.state.description} onChange={this.inputHandler} placeholder="Description"/>
        <input type="text" name="img" value={this.state.img} onChange={this.inputHandler} placeholder="Image URL"/>
        <button type="submit">Update</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    avengers: state.avengers
  }
}
export default connect(mapStateToProps, { updateAvenger })(UpdateAvenger)
