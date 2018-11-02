import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurfs } from "../actions";

class SmurfForm extends Component {
    editSmurfHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
handleSubmitSmurf = () => {
    this.props.addSmurfs({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
        })
        }

render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Age"
            />
            <br />
            <input
              type="text"
              name="height"
              placeholder="Height"
              />
              <br />
              <button onClick={this.handleSubmitSmurf}> Add Smurf </button>
            </form>
          </div>
        );
      }
    }
              
            
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}     

export default connect(
    mapStateToProps,
    {
      addSmurfs,
      fetchSmurfs
    }
  )(SmurfForm);









