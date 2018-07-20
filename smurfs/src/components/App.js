import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs,addSmurf } from '../actions/index';
import InputForum from './forum';

class App extends Component {
componentDidMount(){
	this.props.getSmurfs();
}
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.fetchingSmurfs ? 
		(<div>Loading...</div>) : null }
		{this.props.fetchedSmurfs ?
		(this.props.smurfs.map(smurf => <div key={Math.random(Date.now())}> {smurf.name} </div>)) : null
		}
	<div>
	<InputForum addSmurf={this.props.addSmurf} />
	</div>
      </div>
    );
  }
}

const stateToProps = (state) => {
return {
	smurfs:state.smurfs,
	fetchingSmurfs:state.fetchingSmurfs,
	fetchedSmurfs:state.fetchedSmurfs
	};
};

export default connect(stateToProps,{ getSmurfs,addSmurf })(App);
