import React, { Component } from "react";
import "./App.css";
import MainNavBar from "./MainNavBar";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { getSmurf, postSmurf } from "../store/actions/smurfAction";
import SmurfLists from "./SmurfLists";
import SmurfForm from "./SmurfForm";
import SingleSmurf from "./SingleSmurf";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      name: "",
      height: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.props.getSmurf();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.addSmurf();
    this.props.history.push("/");
    this.setState({
      age: "",
      name: "",
      height: ""
    });
  };
  addSmurf = () => {
    const newSmurf = {
      age: this.state.age,
      name: this.state.name,
      height: this.state.height
    };
    this.props.postSmurf(newSmurf);
  };
  render() {
    const { smurf } = this.props;
    return (
      <div className="App">
        <MainNavBar />
        <Route
          path="/form"
          render={props => (
            <SmurfForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              age={this.state.age}
              name={this.state.name}
              height={this.state.height}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={props => <SmurfLists {...props} smurfs={smurf} />}
        />

        <Route
          exact
          path="/smurf/:id"
          render={props => <SingleSmurf {...props} smurfs={smurf} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurf: state.smurfReducer.smurf
});

export default connect(
  mapStateToProps,
  { getSmurf, postSmurf }
)(App);
