import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import smurfsAction,{createSmurf} from '../actions';
import CreaterContainer from './CreaterContainer';
import SmurfList from './SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.smurfsAction();
  }

  handleChange=event => this.setState({inputText:event.target.value});

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <CreaterContainer />
        <SmurfList smurfs={this.props.mySmurfs} />
      </div>
    );
  }
}

const mapDispatchtoProps = state =>({
  mySmurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
});



export default connect(mapDispatchtoProps, {
  smurfsAction
})(App);
