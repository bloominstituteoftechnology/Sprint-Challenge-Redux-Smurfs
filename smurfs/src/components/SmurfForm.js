import React, { Component } from 'react';
import axios from 'axios';
import { addSmurf } from '../actions';
import connect from 'react-redux/lib/connect/connect';

class SmurfForm extends Component {
  state = {
      name: '',
      age: '',
      height: ''
    };
  

  addSmurf = event => {
    event.preventDefault();

    const newSmurf = {

      name: this.state.name,
      age: this.state.age,
      height: this.state.height

    }

    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      this.setState({smurfs: response.data})
      this.props.history.push("/");
    })

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
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
          <button onClick={this.addSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {};

export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfForm);