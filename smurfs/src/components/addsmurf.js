import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './addsmurf.css';


//This component is able to be used for both adding and editing smurfs.  It gets different props depending
//on the current app state.
class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //I store the inputs here on component state because nothing else needs access to them - the component
      //gives them to an action which carries them up to the store, then blanks its local copues.
      name: props.nameText,
      age: props.ageText,
      height: props.heightText
    }
  }

  //This puts the form inputs on local state
  handleFormType = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <div className="form">
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
          <Button color="secondary" onClick={this.props.cancelButton} >Cancel</Button>
          <Button color="primary" onClick={() => this.props.submitButton('http://localhost:3333/smurfs/', {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height}, this.props.smurfID )}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddSmurf;
