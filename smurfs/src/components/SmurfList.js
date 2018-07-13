import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData } from '../actions';
import Smurf from './Smurf';

class SmurfsList extends Component {

  componentDidMount() {
    this.props.fetchData();
    console.log('this.props', this.props);
  }

  render() {
    return (
      <ul className="smurf-list">
        {this.props.smurfs.map((smurf) => <Smurf key={smurf.id} smurf={smurf} /> )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchData })(SmurfsList);