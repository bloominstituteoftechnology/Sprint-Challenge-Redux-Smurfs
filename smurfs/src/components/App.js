import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import { Container } from "reactstrap";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    document.body.style.background = "#88CCFF";
    return (
      <Container className="my-5 p-5">
        <h1 className="header">SMURF VILLAGE</h1>
        <SmurfList />
        <SmurfForm />
      </Container>
    );
  }

  componentDidMount() {
    this.props.getSmurfs();
  }
}

export default connect(null, { getSmurfs })(App);
