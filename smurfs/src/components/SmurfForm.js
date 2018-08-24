import React, { Component } from "react";
import {connect} from 'react-redux';
import {createSmurf} from '../actions';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleAddSmurf = () => {
      const {name, age, height} = this.state;
      this.props.createSmurf({name, age, height});
      this.setState({name: "", age: "", height: ""});
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.handleAddSmurf}>
          <h2>Add to the Smurf Village</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="number"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        creatingSmurf: state.createSmurf
    };
};
export default connect(mapStateToProps, {createSmurf})(SmurfForm);
