import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import { addSmurfs } from "../actions";
function mapStateToProps(state) {
  return {};
}

class SmurfForm extends Component {
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
    // this.props.submit(this.state.newSmurf, id);
    this.props.addSmurfs(this.state.newSmurf);
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
      <Card className="my-5">
        <CardBody>
          <Form onSubmit={this.handleOnSubmit} onChange={this.handleOnChange}>
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
              <Label for="SmurfHeight">Height</Label>
              <Input
                type="height"
                name="height"
                id="SmurfHeight"
                value={this.state.newSmurf.height}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default connect(mapStateToProps, { addSmurfs })(SmurfForm);
