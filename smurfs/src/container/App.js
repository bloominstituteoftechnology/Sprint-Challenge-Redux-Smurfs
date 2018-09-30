import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSmurfs, addSmurfs } from "../actions";
import SmurfList from '../components/SmurfsList';
import SmurfForm from "../components/SmurfForm";
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
      name: '',
      age: '',
      height: ''
    };
  

  componentDidMount() {
    this.props.getSmurfs();
    //console.log(this.props.getSmurfs());
  };

  render() {
    return (
      <React.Fragment>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList smurfs={this.props.smurfs} />
        <SmurfForm /> 
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  gettingSmurfs: state.gettingSmurfs,
  addingSmurf: state.addingSmurf,
  
});

// const mapDispatchToProps = {
//   getSmurfs,
//   addSmurfs
// }

export default connect(
  mapStateToProps,
  //mapDispatchToProps,
  {getSmurfs},
  //{addSmurfs}
)(App);