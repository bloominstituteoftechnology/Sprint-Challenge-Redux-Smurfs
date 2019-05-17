import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { connect } from "react-redux";
import { smurfAdd, smurfFetch} from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
      <Smurfs smurfs = {this.props.smurfs}/>
      <SmurfForm callback={ (e) =>this.props.smurfAdd(e) }/>
       </div>
    );
  }
  componentWillMount() {
    this.props.smurfFetch();
  }


}

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  }
};
export default connect(
  mapStateToProps,
  { smurfAdd, smurfFetch}
)(App);