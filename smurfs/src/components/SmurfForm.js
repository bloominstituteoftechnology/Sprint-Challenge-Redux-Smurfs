import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";
import { Button, Form, FormGroup, Input } from "reactstrap";
import './App.css'

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <Form>
          <FormGroup>
            {" "}
            <Input
              onChange={this.handleInput}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            {" "}
            <Input
              onChange={this.handleInput}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            {" "}
            <Input
              onChange={this.handleInput}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
          </FormGroup>
          <Button onClick={() => this.props.addSmurf(this.state)}>
            Add a Smurf
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
