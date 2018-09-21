import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {fetchSmurf} from '../actions'
import "./App.css";
import AddSmurf from "./AddSmurf";
import { css } from 'emotion'
//import styled from 'styled-components'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount(){
    this.props.fetchSmurf()
  } 

  render() {
    return (
      <div className="App">
      <AddSmurf/>
        <ul>
          {this.props.smurfs && this.props.smurfs.map(smurf => {
            return (
              <div>
                <li>{smurf.name}</li>
                <li>{smurf.age}</li>
                <li>{smurf.height}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

// const StyledFragment = styled.div`
//   margin: 20px 0;
// `

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, {fetchSmurf})(App);
