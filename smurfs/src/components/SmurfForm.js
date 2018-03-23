import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  handleSubmit = event => {
    this.props.addSmurf(this.state)
    this.setState({
      name:'',
      age: '',
      height: ''
    })
  }

  handleChange = event => {
    this.setState({
      [ event.target.name ]: event.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={ this.addSmurf }>
        <FormGroup>
          <Label>Name</Label>
          <Input
            onChange={ this.handleChange }
            type='text'
            placeholder='Enter name'/>
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input
            onChange={ this.handleChange }
            type='number'
            placeholder='Enter age'/>
        </FormGroup>
        <FormGroup>
          <Label>Height</Label>
          <Input
            onChange={ this.handleChange }
            type='number'
            placeholder='Enter height'/>
        </FormGroup>
        <Button>Add Smurf</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)