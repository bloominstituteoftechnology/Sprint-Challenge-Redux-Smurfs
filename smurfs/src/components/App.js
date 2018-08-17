import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {getSmurfs} from '../actions'
import Smurfs from './Smurfs';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {   
  componentDidMount(){
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>SMURFS</h1>
        </div>
        {this.props.smurfs.length === 0 
          ? <div>No smurfs to display</div>
          : this.props.fetchingSmurfs 
            ? <h1>Loading...</h1>
            : <Smurfs {...this.props} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
