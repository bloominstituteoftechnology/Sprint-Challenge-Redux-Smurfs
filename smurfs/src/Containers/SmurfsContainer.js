import React from 'react';
import { connect } from 'react-redux';
import SmurfList from '../components/SmurfList';

const SmurfsContainer = props => {
  return(
    <SmurfList smurfs={props.smurfs} isFetching={props.isFetching} />
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetchingSmurfs
  }
}

export default connect(mapStateToProps)(SmurfsContainer);
