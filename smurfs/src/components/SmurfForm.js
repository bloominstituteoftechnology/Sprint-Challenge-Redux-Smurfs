import React, { Component } from "react";

import { connect } from "react-redux";
import {addSmurf} from '../actions'
import Form from './Form'


class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      height: "",
      age: ""
    };
  }

  changeHandler = e => {
    e.preventDefault();
    const key = e.target.name;
    this.setState({[key]:e.target.value});
  };

  submitHandler = e => {
      e.preventDefault()
      let smurf = {...this.state}
      this.props.addSmurf(smurf)
      this.setState({
        name: "",
        height: "",
        age: ""
      })
  }

  render() {
    return (
<Form state={this.state} changeHandler={this.changeHandler} submitHandler={this.submitHandler}></Form>
    );
  }
}

export default connect(null, {addSmurf})(SmurfForm); 