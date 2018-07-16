import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSmurf, updateSmurf } from "../actions";

import "./SmurfList.css";
class SmurfList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.smurfs.name,
            age:props.smurfs.age,
            height: props.smurfs.height,
            editing: false,
        }
    }

    handleInput = event => {
      this.setState({ [event.target.name]: event.target.value});
    }

  render() {
    return (
      <div>
        {this.props.fetchingSmurfs ? (
          <h1>Wait. Fetching Smurfs...</h1>
        ) : (
          <div>
            <ul>
              {this.props.smurfs.map((smurf, index) => {
                  {!this.state.editing ? (
                    <div className="divList" key={index}>
                        <li>{smurf.name}</li>
                        <li>{smurf.age}</li>
                        <li>{`${smurf.height} cm`}</li>
                        <button onClick={() => this.props.deleteSmurf(smurf.id)}>X</button>
                        <button onClick={() => this.props.updateSmurf(smurf.id)}>Edit</button>
                    </div>
                    ) : (
                 <div>Yup. You are here.</div>
                )}})}
            </ul>
          </div>
        )}
      </div>)
  }
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    error: state.errorMessage
  };
};

export default connect(mapStateToProps, { deleteSmurf, updateSmurf })(
  SmurfList
);
