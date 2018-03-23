import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Label } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class Form extends Component {
  constructor() {
    super();
    this.state = {
      newSmurf: { name: "", height: "", age: "" }
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnSubmit(event) {
    let id = this.props.id || 0;
    this.props.submit(this.state.newSmurf, id);
    this.setState({ newSmurf: { name: "", age: "", email: "" } });
  }
  handleOnChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let newS = this.state.newSmurf;
    newS[name] = value;
    this.setState({
      newSmurf: newS
    });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <FormGroup>
          <Label for="SmurfName">Name</Label>
          <Input
            type="text"
            name="name"
            id="SmurfName"
            value={this.state.newSmurf.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="SmurfAge">Age</Label>
          <Input
            type="text"
            name="age"
            id="SmurfAge"
            value={this.state.newSmurf.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="SmurfEmail">E-mail</Label>
          <Input
            type="email"
            name="email"
            id="SmurfEmail"
            value={this.state.newSmurf.email}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default connect(mapStateToProps)(Form);
