import React, { Component } from "react";
// import { Router, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import logo from "./D2rdroid1.png";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import SmurfsList from "./SmurfsList";
import CreateSmurfForm from "./CreateSmurfForm";
import UpdateSmurf from "./UpdateSmurfForm";
import { fetchingSmurfs } from "../actions/smurfsActions";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Title">{`D2rd Smurfs`}</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <div>Welcome to D2rd's Redux version of Smurfs!</div>
        <div>Let's go David! Make this happen!</div>
        <a
          className="App-link"
          href="http://linkedin.com/in/gddaniel"
          target="_blank"
          rel="noopener noreferrer">
          About David
        </a>
        <div>
          To add a Smurf fill in the form below and click the 'Add Smurf' button
        </div>
        <CreateSmurfForm />
        <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  {
    fetchingSmurfs
  }
)(App);

// /*
// import React, { Component } from 'react';
// import {Router, NavLink } from 'react-router-dom'
// import { connect } from "react-redux"; // Nov-13
// import {bindActionCreators} from 'redux';


// import logo from './D2rdroid1.png';
// import './App.css';
// /*
//  to wire this component up you're going to need a few things.
//  I'll let you do this part on your own. 
//  Just remember, `how do I `connect` my components to redux?`
//  `How do I ensure that my component links the state to props?`
//  */
// import SmurfsList from './SmurfsList'
// import CreateSmurfForm from './CreateSmurfForm'
// import UpdateSmurf from './UpdateSmurfForm'
// // API calls
// import { fetchingSmurfs } from "../actions/smurfsActions"; // Nov-13

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1 className="App-Title">{`D2rd Smurfs`}</h1>
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <div>Welcome to D2rd's Redux version of Smurfs!</div>
//         <div>Let's go David!  Make this happen!</div>
//         <a
//             className="App-link"
//             href="http://linkedin.com/in/gddaniel"
//             target="_blank"
//             rel="noopener noreferrer"
//             >
//             About David
//           </a>
//             <div>To add a Smurf fill in the form below and click the 'Add Smurf' button</div>
//             <CreateSmurfForm />
//             <SmurfsList />
//       </div>
//     );
//   }
// }

//  // Nov-13 added mapStateToProps statement
 
// const mapStateToProps = (state) => {
//   return {
//     smurfs: state.smurfs,
//     error: state.error,
//     loading: state.loadingSmurfs
//   };
// };

// // Nov-15
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchingSmurfs: fetchingSmurfs
//   }, dispatch);
// }

// // Nov-13 added `connect` statement before exporting `App`
// export default connect(
//   mapStateToProps, mapDispatchToProps)(App);
// */