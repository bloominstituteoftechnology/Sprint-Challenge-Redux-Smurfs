import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
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
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };

    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(smurf => {
        this.props.updateSmurfs();
      })
      .catch(error => {
        console.log(error);
      });

      this.setState({
        name: '',
        age: '',
        height: ''
      });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input 
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="Name"
          />
          <input 
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="Age"
          />
          <input 
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="Height"
          />
          <button type="submit" className="button-class">Add to the village!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;