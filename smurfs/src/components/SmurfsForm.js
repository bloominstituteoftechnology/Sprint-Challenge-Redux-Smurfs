import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewSmurf = e => {
    e.preventDefault();
    let newSmurf = {
      name: this.state.name,
      age: parseInt(this.state.age, 10),
      height: this.state.height,
    }
    this.props.dispatch(addSmurf(newSmurf))
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.addNewSmurf}>
      <input type='text' value={this.state.name} name='name' onChange={this.handleChange} required/>
      <input type='number' value={this.state.age} name='age' onChange={this.handleChange} required/>
      <input type='text' value={this.state.height} name='height' onChange={this.handleChange} required/>
      <button type='submit'>Add smurf</button>
    </form>
  )
  }
};

export default connect()(SmurfsForm);