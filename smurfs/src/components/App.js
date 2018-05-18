import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import { fetchingSmurfs } from "../actions";
import ItemCard from "./ItemCard";
import AddNew from "./AddNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  }
  render() {
    const smurfs = this.props.smurfs;
    console.log(smurfs[0]);
    return (
      <div className="App container">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="container">
          Welcome to your Redux version of Smurfs!
        </div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <br />
        <br />
        {smurfs.map((item, i) => {
          return (
            <Row className="" key={Date.now() + 1}>
              <ItemCard item={item} id={item.id} key={Date.now() + item.id} />
            </Row>
          );
        })}
        <AddNew />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};
export default connect(mapStateToProps, { fetchingSmurfs })(App);
