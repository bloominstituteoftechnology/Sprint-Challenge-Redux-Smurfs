import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class Form extends React.Component {

  state = {
    name: '',
    age: '',
    height: '',
    editing: false
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addNewSmurf = (event)=>{
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNewSmurf}>

        <input value={this.state.name} name="name" placeholder="Name" onChange={this.handleChange} /><br/>

        <input value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange} /><br/>

        <input value={this.state.height} name="height" placeholder="Height" onChange={this.handleChange} /><br/>

        <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(Form);