import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import './App.css';

class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="smurfs__list">
        {this.props.smurfs.map((smurf, i) => {
          return <Smurf className="smurf" key={i} smurf={smurf} i={i} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {
  getSmurfs,
})(SmurfList);
