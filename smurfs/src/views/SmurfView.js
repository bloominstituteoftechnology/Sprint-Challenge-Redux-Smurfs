import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//     addSmurf
// } from '../actions';

import Smurf from '../components/Smurf';
class SmurfView extends Component {
    render(){
        return(
            <h1>Smurf View</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
      ...state
    }
  }

export default connect(
    mapStateToProps
  )(SmurfView);