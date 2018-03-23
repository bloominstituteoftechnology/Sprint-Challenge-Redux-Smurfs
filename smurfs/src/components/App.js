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
    let nameInput, ageInput, heightInput, delInput;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

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
          <input ref={age => (ageInput = age)} placeholder="Age" />
          <input ref={height => (heightInput = height)} placeholder="height" />
          <button>Add Smurf</button>
        </form>
        <br />
        <form
          onSubmit={event => {
            //event.preventDefault();
            let smurf = this.props.smurfs.filter(
              smurf => smurf.name === delInput.value
            );
            this.props.deleteSmurf(...smurf);
            delInput.value = "";
          }}
        >
          <input
            ref={del => (delInput = del)}
            placeholer="Enter the name of the smurf you'd like to delete."
          />
          <button>DELETE SMURF</button>
        </form>
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
