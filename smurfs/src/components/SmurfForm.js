import React, { Component } from "react";
import { getSmurfs, addSmurf, updateSmurf } from "../actions/index";
import { connect } from "react-redux";

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: '',
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createSmurf = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  update = event => {
    event.preventDefault();
    this.props.updateSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
      id: ''
    });
  };


  render() {
    return (
      <div className="SmurfForm">
        <form>
          <input
            onChange={this.handleInput}
            placeholder="name"
            type="text" 
            name="name"
            value={this.state.name}
          />
          <input
            onChange={this.handleInput}
            placeholder="age"
            type="number" 
            name="age"
            value={this.state.age}
          />
          <input
            onChange={this.handleInput}
            placeholder="height"
            type="number" 
            name="height"
            value={this.state.height}
          />
          <input
            onChange={this.handleInput}
            placeholder="id"
            type="number" 
            name="id"
            value={this.state.id}
          />
          <button onClick={ this.createSmurf } type="submit">Add to the village</button>
          <button onClick={ this.update }> Update Smurf </button>
                
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf, updateSmurf })(SmurfForm);
