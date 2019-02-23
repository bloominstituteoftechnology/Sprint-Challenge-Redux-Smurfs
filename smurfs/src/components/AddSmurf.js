import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const formStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto'
}

const inputStyle = {
    margin: '5px'
}

export class AddSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      height: ""
    };
  }
   inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
   submitSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };
   render() {
      return (
        <form style={formStyle} onSubmit={this.submitSmurf}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputHandler}
            placeholder="Name"
          />
          <input
            style={inputStyle}
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.inputHandler}
            placeholder="Age"
          />
          <input
            style={inputStyle}
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.inputHandler}
            placeholder="Height"
          />
          <button type="submit">Add New Smurf</button>
        </form>
      );
    }
  }
 const mapStateToProps = () => ({});
 export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);