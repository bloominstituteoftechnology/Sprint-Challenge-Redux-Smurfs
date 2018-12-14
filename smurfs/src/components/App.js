import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import SmurfList from "./SmurfList";
import AddSmurf from "./AddSmurf";
import UpdateSmurf from "./UpdateSmurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REDUX GETS SMURFED!</h1>
        <div>Create Your Village!</div>
        <NavLink to="/">
          {" "}
          Home <br />{" "}
        </NavLink>
        <NavLink to="/add">Add A Smurf</NavLink>
        {""}
        <br />
        <Route path="/update/:id" component={UpdateSmurf} />
        <SmurfList />
        <Route path="/add" component={AddSmurf} />
      </div>
    );
  }
}

export default App;