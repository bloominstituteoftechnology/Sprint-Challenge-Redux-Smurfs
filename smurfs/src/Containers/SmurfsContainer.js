import React from 'react';
import { connect } from 'react-redux';
import SmurfList from '../components/SmurfList';
import SmurfDisplay from '../components/SmurfDisplay';
import { viewSmurf, deselectSmurf } from '../actions';

const SmurfsContainer = props => {
  return(
    <React.Fragment>
      <SmurfList smurfs={props.smurfs} isFetching={props.isFetching} find={props.viewSmurf} />
      {props.isShowing ? <SmurfDisplay {...props.smurf} deselect={()=>props.deselectSmurf()} /> : null}
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetchingSmurfs,
    isShowing: state.viewingSmurf,
    smurf: state.selectedSmurf
  }
}

export default connect(mapStateToProps, { viewSmurf, deselectSmurf })(SmurfsContainer);
