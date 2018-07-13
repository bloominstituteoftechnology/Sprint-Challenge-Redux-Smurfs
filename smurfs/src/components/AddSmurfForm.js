import React, { Component } from 'react';
import { addSmurf, deleteSmurf, addClicked } from '../actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class AddSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const { name, age, height } = this.state;
    const newSmurf = {
      name,
      age,
      height,
    };
    newSmurf.height = newSmurf.height + 'cm';
    const URL = 'http://localhost:3333/smurfs';
    this.props.addSmurf(URL, newSmurf);

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deleteSmurf = e => {
    e.preventDefault();
    let selectedSmurf = document.getElementById('selectSmurf').value;
    let smurf = this.props.smurfs.find(s => s.name === selectedSmurf);
    const URL = `http://localhost:3333/smurfs/${smurf.id}`;
    this.props.deleteSmurf(URL);
  };

  render() {
    return (
      <div className="AddSmurfForm" style={{ marginLeft: '20%' }}>
        <Form inline onSubmit={this.addSmurf}>
          <FormGroup>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
          </FormGroup>
          <Button type="submit" color="info">
            Add to the village
          </Button>
        </Form>
        <br />
        <Form inline onSubmit={this.deleteSmurf}>
          <FormGroup>
            <Input
              type="select"
              name="select"
              id="selectSmurf"
              style={{ width: '505px' }}
            >
              {this.props.smurfs.map((s, key) => {
                return (
                  <option key={key} value={s.name}>
                    {s.name}
                  </option>
                );
              })}
            </Input>
          </FormGroup>
          <Button type="submit" color="danger">
            Banish from village
          </Button>
        </Form>
        <br />
        <Form inline>
          <FormGroup>
            <Button color="success" onClick={this.props.addClicked}>
              Return to village
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf, deleteSmurf, addClicked },
)(AddSmurfForm);
