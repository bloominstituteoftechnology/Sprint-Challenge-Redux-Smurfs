import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions/index';
import AddSmurf from './AddSmurf';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
*/
class App extends Component {
  componentDidMount(){
    this.props.getSmurf();
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.props.fetchingSmurfs ? (
            <h2>Fetching Smurfs...</h2>
          ) : (
          <div>
            {this.props.smurfs.map(smurf =>
            <li key= {smurf.name}>{smurf.name}</li>
            )}
          </div>
          )}
        </div>
        {/* <AddSmurf smurf = {this.props.smurf} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs, 
    error: state.error, 
    fetchingSmurfs: state.fetchingSmurfs
  };
};
export default connect(mapStateToProps, {getSmurf})(App);
