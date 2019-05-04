import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import {connect} from 'react-redux'
import SmurfForm from './SmurfForm';
import Smurfs from './SmurfsList';
import SmurfProfile from './SmurfProfile';

import {getSmurfs} from '../actions'

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(){
    super()
  }
  componentWillMount(){
    this.props.getSmurfs()
  }
  render() {
return (
  <div className="container">
 
 <Route exact path="/" render={() => <SmurfForm />} />
 <Route exact path="/" render={() => <Smurfs />} />
 
   </div>
);
}}
const mapStateToProps = (state)=>{
  return {
    smurfs : state.smurfs
  }
}
export default  connect(mapStateToProps,{getSmurfs})(App);
