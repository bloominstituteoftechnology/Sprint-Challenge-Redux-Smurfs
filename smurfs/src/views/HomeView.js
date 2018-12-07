import React, { Component } from 'react';
import { connect } from 'react-redux';
import { urlLinks } from '../components/App';
import { getSmurfs } from '../store/actions';
import Header from '../components/Header';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class HomeView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        <Header {...this.props} urlLinks={urlLinks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(HomeView);
