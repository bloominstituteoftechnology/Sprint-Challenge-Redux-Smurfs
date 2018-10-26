// React import
import React, { Component } from 'react';
// Component import
import SmurfList from '../components/SmurfList';
import SmurfForm from '../components/SmurfForm';
// Redux imports
import { connect } from 'react-redux';
// Action imports
import { fetchData, addSmurf, deleteSmurf } from '../actions';
class SmurfListView extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <SmurfForm addSmurf={this.props.addSmurf} />
        <SmurfList
          smurfs={this.props.smurfs}
          deleteSmurf={this.props.deleteSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchData, addSmurf, deleteSmurf }
)(SmurfListView);
