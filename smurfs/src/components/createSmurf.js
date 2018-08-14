import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

class CreateSmurf extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    }
  handleChangeSmurf = e => {
    this.setState({ [e.target.name]: e.target.value });
    return e.target.value;
  };

  handleSubmitSmurf = () => {
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({name: '', age: '', height: ''});
  };

  render() {
    return (
      <div>
        <div>
          <h4>Want to add a Smurf?</h4>
          <input type="text" placeholder='Smurf Name' value ={this.state.name} onChange={this.handleChangeSmurf} name="name" />
          <input type="text" placeholder='Smurf Age' value ={this.state.age} onChange={this.handleChangeSmurf} name="age" />
          <input type="text"placeholder='Smurf Height' value ={this.state.height}  onChange={this.handleChangeSmurf} name="height" />
        </div>
        <br/>
        <button onClick={() => this.handleSubmitSmurf()}>Add Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        addingSmurf: state.addingSmurf,
        error: state.error
    };
};

export default connect(
    mapStateToProps, 
    {addSmurf }
)(CreateSmurf)