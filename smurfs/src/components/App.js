import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {getSmurfs,deleteSmurf} from "../actions";
import SmurfList from "./SmurfList";
import InputForm from "./InputForm"
// import styled from 'styled-components';
// const FrBar = styled.div`   
//      display: flex;
//      flex-wrap: wrap;
//      margin: 50px;
// `;
class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }
  deleteItem = (e, index) => {
    e.preventDefault()
    this.props.deleteSmurf(index)
}
  render() {
    return (
      <div className="App">
        <h1> Happy Smurfs Family </h1>
        <InputForm />
        <SmurfList delete={this.deleteItem} smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    smurfs:state.smurfs,
    fetching:state.fetching,
    error:state.error
  }
}

export default connect(mapStateToProps,{getSmurfs,deleteSmurf})(App);