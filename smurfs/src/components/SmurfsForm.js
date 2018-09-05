import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';

class SmurfsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSmurf = () => {
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className='smurfForm'>
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="name" className="mr-sm-2">Name</Label>
                     <input
                        name='name'
                        value={this.state.name}
                        type='text'
                        placeholder='name'
                        onChange={this.handleInput}
                    />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="age" className="mr-sm-2">Age</Label>
                    <input
                        name='age'
                        value={this.state.age}
                        type='text'
                        placeholder='age'
                        onChange={this.handleInput}
                    />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="height" className="mr-sm-2">Height</Label>
                        <input
                            name='height'
                            value={this.state.height}
                            type='text'
                            placeholder='height'
                            onChange={this.handleInput}
                        />
            </FormGroup>
            <Button onClick={() => this.createSmurf()}>Add More Smurfs</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps, { addSmurf })(SmurfsForm);