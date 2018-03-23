import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSm, addSm } from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?` (connect())
 `How do I ensure that my component links the state to props?` (mapStateToProps)
 */
class App extends Component {
  render() {
    let nameInput, ageInput, heightInput, del;
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return (
            <ul>
              <li>Name:{smurf.name}</li>
              <br />
              <li>Age:{smurf.age}</li>
              <br />
              <li>Height:{smurf.height}</li>
              <br />
              <br />
            </ul>
          );
        })}

        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.getSm({
              name: nameInput.value,
              age: ageInput.value,
              height: heightInput.value
            });
            nameInput.value = "";
            ageInput.value = "";
            heightInput.value = "";
            document.getElementById("nameField").focus();
          }}
        >
          <input
            ref={name => (nameInput = name)}
            placeholder="Name"
            id="nameField"
            autoFocus
          />
          <input ref={age => (ageInput = age)} placeholder="age" />
          <input ref={height => (heightInput = height)} placeholder="height" />
          <button>This button adds a smurf</button>
        </form>
        <br />
      </div>
    );
  }

  componentDidMount() {
    this.props.addSm();
  }
}

const mapStateToProps = state => {
  return {
    sm: state.smurfs,
    getSm: state.getSm,
    addSm: state.addSm,
    error: state.eorror
  };
};

export default connect(mapStateToProps, { addSm, getSm })(App);
