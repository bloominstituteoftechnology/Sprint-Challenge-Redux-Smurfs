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
      height: '',
    })
  }

  handleChange = event => {
    this.setState({
      [ event.target.name ]: event.target.value
    })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <
        </FormGroup>
      </Form>
    )
  }
}