import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: null,
      height: ''
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.name, this.state.age, this.state.height);
    this.setState({
      name: "",
      age: null,
      height: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          placeholder="name"
          value={this.state.name}
          name="name"
          type="text"
          required
        />
        <input
          onChange={this.onChange}
          placeholder="age"
          value={this.state.age}
          name="age"
          type="number"
          required
        />
        <input
          onChange={this.onChange}
          placeholder="Height"
          value={this.state.height}
          name="height"
          type="text"
          required
        />
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
    return {
      smurfs: state.smurfs
    };
  };

export default connect(mapStateToProps, { addSmurf })(SmurfForm);