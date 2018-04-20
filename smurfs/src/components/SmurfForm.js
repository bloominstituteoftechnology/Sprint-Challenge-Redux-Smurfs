import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = e => {
    e.preventDefault();
    const smurf = {
        name: this.state.name,
        age: Number(this.state.age),
        height: this.state.height
    }
    this.props.addSmurf(smurf);
    this.setState({ name: '', age: '', height: ''});
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
        <Form inline onSubmit={this.addSmurf} className="smurfForm">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2 friendLabel">Name:</Label>
                <Input 
                    type="text"
                    id="name" 
                    placeholder="Name" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInputChange} 
                    required
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="age" className="mr-sm-2 friendLabel">Age:</Label>
                <Input 
                    type="number"
                    id="age" 
                    placeholder="Age" 
                    name="age" 
                    value={this.state.age} 
                    onChange={this.handleInputChange} 
                    required
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="height" className="mr-sm-2 friendLabel">Height:</Label>
                <Input 
                    type="text" 
                    id="height"
                    placeholder="Height" 
                    name="height" 
                    value={this.state.height} 
                    onChange={this.handleInputChange} 
                    required
                />
            </FormGroup>
            <Button type="submit">Add Smurf</Button>
          </Form>
    );
  }
}

export default connect(null, { addSmurf })(SmurfForm);
