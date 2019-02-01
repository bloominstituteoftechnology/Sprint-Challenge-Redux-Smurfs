import React, { Component } from 'react';
import {addASmurf} from '../actions';
import {connect} from 'react-redux';
import styled from 'styled-components';

const FormDiv = styled.div`
  border: 1px solid black;
  padding: 5px;
  background: white;
  form {
    display: flex;
    flex-direction: column;
    p {
      color: blue
    }
    button {
      width: 100%;
    }
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: 4
    };
  }
  addSmurf = (event, props) => {
    event.preventDefault();
    this.props.addASmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',

    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormDiv>
        <p className="title"><strong>
          Add New Smurf
        </strong></p>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </FormDiv>
    );
  }
}

const mapStateToProps = state => {
  return {state: state};
}

const mapDispatchToProps = {
  addASmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);
