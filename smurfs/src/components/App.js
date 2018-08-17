import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'; 
import {getSmurfs, addSmurf} from '../actions'; 
import Smurf from './Smurf'; 

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSmurfs(); 
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.loadingSmurfs ? (
          <p> Loading Smurfs.... </p>
        ): this.props.smurfs.map(smurf => {
          return <Smurf name = {smurf.name} age = {smurf.age} height = {smurf.height} />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
