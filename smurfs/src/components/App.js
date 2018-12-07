import React, { Component } from 'react';
import { connect } from "react-redux";

import './App.css';
import {getSmurfs} from '../actions'
import SmurfList from './SmurfList/SmurfList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
		console.log("CDM App.js Props: ", this.props);
		this.props.getSmurfs();
	}

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps ", state);
	return {
		smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
		error: state.error,
	};
}

export default connect(
  mapStateToProps,
{
  getSmurfs,
  // addNewFriend,
  },
)(App);

// export {App, connect};
