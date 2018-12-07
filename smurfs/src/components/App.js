import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';

import SmurfsList from '../components/SmurfsList';
import AddSmurf from '../components/AddSmurf';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    if(this.props.isFetching){
      return <h1>Loading ...</h1>;
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
       
        <SmurfsList smurfs={this.props.smurfs}/>
        <AddSmurf {...this.props}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state);
  return{
    smurfs: state.smurfs,
    isFetching: state.fetching
  };
}

export default connect(
  mapStateToProps,
  {getSmurfs, addSmurf}
)(App);
