import React, { Component } from 'react';
import {addASmurf} from '../actions';
import {connect} from 'react-redux';

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
      <div className="SmurfForm">
        <h3>Add New Smurf</h3>
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
      </div>
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
