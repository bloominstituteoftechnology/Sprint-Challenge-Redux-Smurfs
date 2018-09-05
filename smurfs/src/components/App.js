import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import { fetchingSmurfs, deletingSmurf } from "../actions";
import ItemCard from "./ItemCard";
import AddNew from "./AddNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  }
  render() {
    const smurfs = this.props.smurfs;
    console.log("smurfsArray",smurfs);
    return (
      <Container className="App">
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
            <Row className="" key={Date.now()}>
              <ItemCard
              fetchingSmurfs={this.props.fetchingSmurfs}
              deletingSmurf={this.props.deletingSmurf}
              item={item} id={item.id} key={Date.now() + item.id} />
            </Row>
          );
        })}
        <AddNew />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return { smurfs: state.smurfs };
};
export default connect(mapStateToProps, { fetchingSmurfs, deletingSmurf })(App);
