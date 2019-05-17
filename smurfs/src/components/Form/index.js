import React from 'react';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../../actions";
import '../App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "",
        age: "",
        height: "",
      }
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    })
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.submitHandler}>
          <input 
            type="text"
            name="name"
            placeholder="Enter Smurf Name"
            value={this.state.name}
            onChange={this.inputHandler}
          />
          <input
            type="number"
            name="age"
            placeholder="Enter Smurf Age"
            value={this.state.age}
            onChange={this.inputHandler}
          />
          <input
            type="text"
            name="height"
            placeholder="Enter Smurf Height"
            value={this.state.height}
            onChange={this.inputHandler}
          />
          <button onClick={this.props.submitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    loading: state.loading,
  }
};

export default connect(mapStateToProps, { getSmurfs, addSmurf } )(Form);