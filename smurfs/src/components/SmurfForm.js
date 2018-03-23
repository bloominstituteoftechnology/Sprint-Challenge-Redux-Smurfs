import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


class SmurfForm extends Component {
  state = {
    Fields: {
      name: '',
      age: '',
      height: ''
    }
  }

  
  handleChange = event => {
    
    const { name, value } = event.target;
    // console.log(name, value)
    
    const fields = this.state.Fields;
    fields[name] = value;
    // console.log(fields)
    
    this.setState({ Fields: fields });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.Fields);
    
    this.setState({
      Fields: {
        name:'',
        age: '',
        height: ''
      }
    });
  };

  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <FormGroup>
          <Label>Name</Label>
          <Input
            onChange={ this.handleChange }
            type='text'
            name='name'
            value={ this.state.Fields.name }
            placeholder='Enter name'/>
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input
            onChange={ this.handleChange }
            type='number'
            name='age'
            value={ this.state.Fields.age }
            placeholder='Enter age'/>
        </FormGroup>
        <FormGroup>
          <Label>Height</Label>
          <Input
            onChange={ this.handleChange }
            type='number'
            name='height'
            value={ this.state.Fields.height }
            placeholder='Enter height'/>
        </FormGroup>
        <Button>Add Smurf</Button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)