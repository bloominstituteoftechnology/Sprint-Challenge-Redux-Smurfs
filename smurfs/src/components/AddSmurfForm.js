import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class AddSmurfForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addSmurf(this.state)
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <input 
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.inputHandler}
        />
        <input 
          type="text"
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.inputHandler}
        />
        <input 
          type="text"
          name="height"
          placeholder="Height"
          value={this.state.height}
          onChange={this.inputHandler}
        />
        <button type="submit">Add Smurf!</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm)