import React, { Component } from 'react'
// import './SmurfCard.css';
import {deleteSmurf} from '../actions';
import { connect } from 'react-redux';

class SmurfCard extends Component {
  render() {
      const { index, name, age, height } = this.props;
    return (
      <div className="card">
        <div className="card_left">
            <button 
              className="delete"
              onClick={e => {
                  e.stopPropagation();
                  deleteSmurf(index);
              }}>Delete</button>
        </div>
        <div className="card_right">
        <p>{name}</p>
        <p>{age}</p>
        <p>{height}</p>
        </div>
      </div>
    )
  }
}

export default connect(null, {deleteSmurf})(SmurfCard);