import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux'

import {addSmurf} from '../actions'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  getSmurfsHandler = e =>{
    e.preventDefault()
   console.log(
     this.props.addSmurf(
      this.state.name,
      this.state.age,
      this.state.height))
      this.state.name=''
      this.state.age=''
      this.state.height=''
      window.location.reload();
  }
  handleInputChange = e => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
          <form className="form-inline" onSubmit={this.getSmurfsHandler}>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">Name:</div>
    </div>
    <input type="text" className="form-control" id="inlineFormInputName2" placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
          />
  </div>

   <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">Age:</div>
    </div>
    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" 
    onChange={this.handleInputChange}
    placeholder="age"
    value={this.state.age}
    name="age"
  />
  </div>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">Height:</div>
    </div>
    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" 
    onChange={this.handleInputChange}
    placeholder="height"
    value={this.state.height}
    name="height"
  />
  </div>
  <button type="submit" className="btn btn-primary mb-2">Add to the village</button>
</form>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{}
  
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm) 

