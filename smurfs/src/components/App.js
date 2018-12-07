import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';
import CreateSmurfForm from './CreateSmurfForm';
import Smurf from './Smurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {


  componentDidMount(){
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <CreateSmurfForm {...this.props}/>
        {this.props.smurfs.map(smurf => (
                <Smurf
                    key={smurf.id}
                    smurf={smurf}
                    deleteSmurf={this.props.deleteSmurf}
                    // startUpdate={props.startUpdate}
                />
            ))}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSmurfs, 
    addSmurf, 
    deleteSmurf, 
    updateSmurf
  }
)(App);
