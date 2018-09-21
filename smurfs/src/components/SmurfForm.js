import React, { Component } from 'react';
import { add } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  input {
    margin: 5px;
    border-radius: 5px;
    border: none;
    height: 18px;
  }

  button {
    border-radius: 5px;
    background: lightblue;
    width: 80px;
    margin-bottom: 5%;
    font-family: Acme;
    cursor: pointer;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      height: null
    };
  }

  saveSmurf = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        {this.props.adding ? (
          <div className="form2">
            Making our way downtown, walking fast, faces pass and we're
            homebound.
          </div>
        ) : (
          <Form
            className="form"
            onSubmit={event => {
              event.preventDefault();
              this.props.add(this.state);
            }}
          >
            <h2>Hi Friend!</h2>
            <input name="name" onChange={this.saveSmurf} placeholder="Name" />
            <input name="age" onChange={this.saveSmurf} placeholder="Age" />
            <input
              name="height"
              onChange={this.saveSmurf}
              placeholder="Height"
            />
            <button type="submit">Join us!</button>
          </Form>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    adding: state.adding,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { add }
)(SmurfForm);
