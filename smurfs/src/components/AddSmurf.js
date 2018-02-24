import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = _ => {
    const { name, age, height } = this.state;
    this.props.addSmurf({ name, age, height });
    this.setState({ name: '', age: '', email: '', });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInputChange}
        />
        <button onClick={() =>this.handleAddSmurf()} type="button">
          Add New Smurf
        </button>
      </form> 
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    addingSmurf: state.addingSmurf,
  };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurf);
