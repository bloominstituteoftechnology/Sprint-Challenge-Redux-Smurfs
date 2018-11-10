import React, { Component } from "react";
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class SmurfList extends Component {


  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="friends-container">
        { this.props.loading ? <h2>LOADING SMURFS...</h2> : null }
        { this.props.error !== '' ? <h2>{this.props.error}</h2> : null }
        { this.props.smurfs.map( smurf => <Smurf smurf={smurf} key={smurf.id} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);