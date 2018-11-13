import React from 'react'
import { connect } from 'react-redux'

import { createSmurf, updateSmurf } from '../actions'

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }


  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitHandler = e => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateSmurf(this.state);
    } else {
      this.props.createSmurf(this.state);
    }
    this.setState({name: '', age: '', height: ''});
  }

  componentDidMount() {
    if (this.props.id) {
      this.setState(this.props.smurfs.find(smurf => smurf.id === Number(this.props.id)));
    }
  }

  render() {
    return (
      <form className="smurf-form" onSubmit={this.submitHandler}>
        <input 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.inputHandler} 
            placeholder="Name" />
        <input 
            type="text" 
            name="age" 
            value={this.state.age} 
            onChange={this.inputHandler} 
            placeholder="Age" />
        <input 
            type="text" 
            name="height" 
            value={this.state.height} 
            onChange={this.inputHandler} 
            placeholder="Height" />
        <button type="submit">{this.props.id?'Update':'Create'}</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {smurfs: state.smurfs}
}

export default connect(mapStateToProps, { createSmurf, updateSmurf })(SmurfForm);