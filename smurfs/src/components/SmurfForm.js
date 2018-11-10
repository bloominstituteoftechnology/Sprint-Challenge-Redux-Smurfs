import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';
import './App.css';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  updateSmurf = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };

    this.props.addSmurf(newSmurf);

    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

  render() {
    return (
      <div className="form__container">
        <div className="smurf__form">
          <form type="submit" onSubmit={this.addSmurf}>
            <div className="form__text">Add a new Smurf!</div>
            <div>
            <input
              type="text"
              className="form__input"
              placeholder="Name"
              onChange={this.updateSmurf}
              name="name"
              value={this.state.name}
            />
            <input
              type="number"
              className="form__input"
              placeholder="Age"
              onChange={this.updateSmurf}
              name="age"
              value={this.state.age}
            />
            <input
              type="number"
              className="form__input"
              placeholder="Height"
              onChange={this.updateSmurf}
              name="height"
              value={this.state.height}
            />
            </div>
            <input type="submit" value="submit" className="form__button" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(SmurfForm);
