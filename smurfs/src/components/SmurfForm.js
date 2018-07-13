import React from "react";
import "bulma/css/bulma.css";
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  changeInfo = e => {
      this.setState({ [e.target.name]: e.target.value });
  };
  createSmurf = () => {
      const smurf = {
          ...this.state
      }
      this.setState({ name: '', age: '', height: ''});
      return smurf;
  }
  render() {
    return (
      <div className="container">
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="columns is-multiline is-centered is-vertical">
            <div className="column is-three-fifths">
              <div className="field">
                <div className="control">
                  <label htmlFor="smurf-name">Name</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    id="smurf-name"
                    name = "name"
                    value = {this.state.name} 
                    onChange = {this.changeInfo}
                  />
                </div>
              </div>{" "}
              {/* field */}
            </div>{" "}
            {/* column */}
            <div className="column is-three-fifths">
              <div className="field">
                <div className="control">
                  <label htmlFor="smurf-age">Age</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Age"
                    id="smurf-age"
                    name = "age"
                    value = {this.state.age}
                    onChange = {this.changeInfo}
                  />
                </div>
              </div>{" "}
              {/* field */}
            </div>{" "}
            {/* column */}
            <div className="column is-three-fifths">
              <div className="field">
                <div className="control">
                  <label htmlFor="smurf-height">Height</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Height"
                    id="smurf-height"
                    name = "height"
                    value = {this.state.height}
                    onChange = {this.changeInfo}
                  />
                </div>
              </div>{" "}
              {/* field */}
            </div>{" "}
            {/* column */}
          </div>{" "}
          {/* columns */}
          <button onClick = {() => {
              const newSmurf = this.createSmurf();
              this.props.addSmurf(newSmurf);
              }}>Add Smurf</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { addSmurf })(SmurfForm);
