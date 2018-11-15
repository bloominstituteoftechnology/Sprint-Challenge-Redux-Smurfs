import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Smurf from './Smurf';
import { getSmurfs } from '../actions/index';
import smurfgroup from './smurfsgroup.jpg'
import '../index.css';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    if (this.props.loading) {
      return (
        <p>Loading Smurfs</p>
      )
    }
    return (
      <div className="Smurfs">
        <NavLink className="main-link link" to='smurf-form'>
          <p>Click Here To Add Smurfs</p>
        </NavLink>
        <h1>Smurf Village</h1>
        <img src={smurfgroup} alt='smurffamily' />
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf className="Smurfs"
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    smurfs: state.smurfs
  };

};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(Smurfs);

