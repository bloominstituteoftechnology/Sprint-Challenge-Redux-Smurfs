import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';



class AddSmurf extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.nameText,
      age: props.ageText,
      height: props.heightText
    }
  }

  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <div>
        <h1>{this.props.headerText}</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input name="name" id="name" placeholder="Enter Name" onChange={this.handleFormType} value={this.state.name} />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input name="age" id="age" placeholder="Enter Age"  onChange={this.handleFormType} value={this.state.age} />
          </FormGroup>
          <FormGroup>
            <Label for="height">Height</Label>
            <Input name="height" id="height" placeholder="Enter Height" onChange={this.handleFormType} value={this.state.height} />
          </FormGroup>
          <Button color="danger" onClick={this.props.cancelButton} >Cancel</Button>
          <Button color="success" onClick={() => this.props.submitButton('http://localhost:3333/smurfs/', {name: this.state.name, age: this.state.age, height: this.state.height}, this.props.smurfID )}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddSmurf;
