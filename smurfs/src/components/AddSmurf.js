import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';


class AddSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  addSmurf = event => {
    const {name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };
    this.props.postSmurf(smurf);
    console.log(smurf);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  };

    render() {
    return (
      <div className="Form-bg">
        <form className="Add-form">
          <input
            className="Name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.addSmurf}
          />
          <input
            className="Age"
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.addSmurf}
          />
          <input
            className="Height"
            name="height"
            placeholder="height"
            value={this.state.height}
            onChange={this.addSmurf}
          />
        <button className="Add-button" onClick={this.submitSmurf}>Submit</button>
      </form>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
  };
};
// connect props, post, and form
export default connect(mapStateToProps, { postSmurf })(AddSmurf);