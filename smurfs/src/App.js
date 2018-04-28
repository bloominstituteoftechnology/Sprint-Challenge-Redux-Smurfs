import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Smurfs from './Components/Smurfs';
// import AddSmurfForm from './Components/AddSmurfForm';
import { getSmurfs } from './Actions';

class App extends Component { 
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Smurfs {...this.props} /> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: [],
    fetchingSmurfs: false,
    fetchedSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurfs: false,
    error: null
  }
} 
export default connect(mapStateToProps, { getSmurfs })(App);
