import React from 'react';
import { connect } from 'react-redux';
import SmurfList from '../components/SmurfList';
import SmurfDisplay from '../components/SmurfDisplay';
import { viewSmurf, deselectSmurf, editSmurf, deleteSmurf } from '../actions';

const SmurfsContainer = props => {
  return(
    <React.Fragment>
      <SmurfList smurfs={props.smurfs} isFetching={props.isFetching} find={props.viewSmurf} />
      {props.isShowing ? <SmurfDisplay
                            {...props.smurf}
                            deselect={()=>props.deselectSmurf()}
                            edit={()=>props.editSmurf()}
                            del={()=>props.deleteSmurf(props.smurf)}
                            /> : null}
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

export default connect(mapStateToProps, { viewSmurf, deselectSmurf, editSmurf, deleteSmurf })(SmurfsContainer);
