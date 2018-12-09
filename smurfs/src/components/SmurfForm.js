import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends React.Component {
  /*
    name
    description
    shipping
    price
    imageUrl
  */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: props.smurfs.length,
      smurfs: props.smurfs
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addSmurf({
      id: this.state.id,
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name.."
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="age"
            value={this.state.age}
            placeholder="age.."
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="height"
            value={this.state.height}
            placeholder="height.."
          />
          <button>
            {'Add Smurf'}
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;



/*
//import { addSmurf } from '../actions/';

class SmurfForm extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      id: '',
      maxId: props.maxId
    };
  }

  clearInputText = () => {
    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  }

  submitSmurfToAdd = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    if (this.state.name === '' || this.state.email === '' || this.state.age === '') {
      this.clearInputText();
      return
    }else{
      let id = this.state.id +1;
      let smurf = {
        id: this.state.maxId,
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      }
      console.log(smurf.id + ' ' + smurf.name + ' ' + smurf.age + ' ' + smurf.height);
      console.log(this.state);
      this.state.props.addSmurf(smurf);
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitSmurfToAdd}>
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
          <button type="submit" >Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;*/
