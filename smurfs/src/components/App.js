import React, { Component } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import "./App.css";
import { fetchSmurfs, addNewSmurf, deleteSmurf } from "../actions";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import img from './smurf_banner.jpg';

const Background = styled.div`
  background-repeat: no-repeat;
  background-image: url(${img});
  width: 1920px;
  height: 550px;
  font-size: 2em;
  font-weight: bold;
`

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
          <div>
            <Background>
              <h1>Smurf Village</h1>
            </Background>
            <SmurfForm />
            <Smurfs {...this.props} />
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfs,
    addNewSmurf,
    deleteSmurf
  }
)(App);