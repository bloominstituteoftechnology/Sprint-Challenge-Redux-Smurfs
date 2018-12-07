import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addSmurf
} from '../actions';

import SmurfForm from '../components/SmurfForm';

class SmurfFormView extends Component {
    render(){
        return(
            <SmurfForm/>
        )
    }
}

const mapStateToProps = state => {
    return {
      ...state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        addSmurf: smurfInfo => dispatch(addSmurf(smurfInfo))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SmurfFormView);;