import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { updateSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  componentDidMount() {
    this.setState({ smurf: this.props.currentSmurf });
  }

  handleChangeSmurfInputField = e => {
    let newSmurfData = { [e.target.name]: e.target.value };
    this.setState({ smurf: {...this.state.smurf, ...newSmurfData} })
  }

  handleSubmitUpdateSmurf = smurf => {
    this.props.updateSmurf(smurf);
    this.props.toggleModal();
  }

  render() {
    return (
      <div style={{margin: '12px'}}>
      <Form>
        <FormGroup row>
          <Label sm={2}>Name</Label>
          <Col>
            <Input
              type="text"
              name="name"
              onChange={this.handleChangeSmurfInputField}
              value={this.state.smurf.name}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Age</Label>
            <Col>
              <Input
                type="number"
                name="age"
                onChange={this.handleChangeSmurfInputField}
                value={this.state.smurf.age}
              />
            </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Height</Label>
            <Col>
              <Input
                type="number"
                name="height"
                onChange={this.handleChangeSmurfInputField}
                value={this.state.smurf.height}
              />
            </Col>
        </FormGroup>
    </Form>
    <Button color="primary" onClick={() => this.handleSubmitUpdateSmurf(this.state.smurf)}>Update</Button>
    </div>
    );
  }
}
export default connect(() => {}, { updateSmurf })(SmurfForm);
