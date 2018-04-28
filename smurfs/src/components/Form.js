import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf, pending, updateSmurf } from '../actions';

class Form extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    height: '',
  }
  resetState = () => {
    this.setState({name: '', age: '', height: '',})
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleButton = () => {
    this.props.addSmurf(this.state);
    this.resetState();
  }
  handleUpdate = () => {
    if (this.state.id !== '') {
      this.props.updateSmurf(this.state)
      this.setState({id: '', name: '', age: '', height: '',})      
    }
    this.props.pending();
  }
  render() {
    return(
      <div>
        {this.props.updatingSmurf ?
          <input 
            placeholder="ID"
            name="id"
            onChange={this.handleChange}
            value={this.state.id}/> : null}
        <input 
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}/>
        <input 
          placeholder="Age"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}/>
        <input 
          placeholder="Height"
          name="height"
          onChange={this.handleChange}
          value={this.state.height}/>
        <button onClick={this.handleButton}>Add Smurf</button>
        <button onClick={this.handleUpdate}>Update Smurf</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    updatingSmurf: state.updatingSmurf,
  }
}

export default connect(mapStateToProps, {addSmurf, pending, updateSmurf})(Form);