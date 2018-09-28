import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
import SmurfList from './SmurfsList';
import Smurfs from './Smurf';
import SmurfForm from "./SmurfForm";
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  };

  render() {
    return (
      <React.Fragment>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <SmurfList smurfs={this.state.smurfs} /> 
       
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  gettingSmurfs: state.gettingSmurfs,
  addingSmurf: state.addingSmurf,
  
});



export default connect(
  mapStateToProps,
  {getSmurfs}
)(App);