import React, { Component } from 'react';
import { connect } from "react-redux";

import './App.css';
import {getSmurfs, addNewSmurf, deleteSmurf} from '../actions'
import SmurfList from './SmurfList/SmurfList';
import AddSmurfForm from './AddSmurfForm/AddSmurfForm';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
		// console.log("CDM App.js Props: ", this.props);
		this.props.getSmurfs();
  }
  
  handleDelete = event => {
		event.preventDefault();
		this.props.deleteSmurf();
	}

  render() {
    console.log('App', this.props)
    return (
      <div className="App">
        {this.props.pending ? <h4>LOADING...</h4> : null };
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurfForm 
          smurfs={this.props.smurfs}
          id={this.props.id}
          name={this.props.name}
          age={this.props.age}
          height={this.props.height}
          addNewSmurf={this.props.addNewSmurf}
        />
        <SmurfList 
          smurfs={this.props.smurfs}
          deleteSmurf={this.props.deleteSmurf}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("mapStateToProps ", state);
	return {
		smurfs: state.smurfs,
		pending: state.pending,
		error: state.error,
	};
}

// function mapDispatchToProps(dispatch) {
//   return (
//     () => {
//       dispatch(this.props.addNewSmurf) 
//     }
//   )
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
{
  getSmurfs,
  addNewSmurf,
  deleteSmurf
  },
)(App);

