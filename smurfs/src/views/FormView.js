import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { urlLinks } from '../components/App';
import { getSmurfs, addSmurf, removeSmurf } from '../store/actions';
import Header from '../components/Header';
import SmurfForm from '../components/SmurfForm';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class FormView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <Fragment>
        <Header {...this.props} urlLinks={urlLinks} />
        <SmurfForm {...this.props} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, removeSmurf }
)(FormView);
