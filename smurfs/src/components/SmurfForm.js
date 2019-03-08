import React from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { connect } from "react-redux";
import { createSmurf } from "../actions/index";

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      height: "",
      age: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.name && this.state.age && this.state.height) {
      this.props.createSmurf(this.state);
      this.setState({
        name: "",
        height: "",
        age: ""
      });
    }
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <FormGroup row>
          <Label for="smurfName" sm={2}>
            Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="smurfName"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="smurfAge" sm={2}>
            Age
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="age"
              id="smurfAge"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} for="smurfHeight">
            Height
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="height"
              id="smurfHeight"
              value={this.state.height}
              onChange={this.changeHandler}
            />
          </Col>
        </FormGroup>
        <Button color="success" >Submit</Button>
      </Form>
    );
  }
}

export default connect(
  () => ({}),
  { createSmurf }
)(SmurfForm);
