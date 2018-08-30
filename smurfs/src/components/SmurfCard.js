import React, { Component } from 'react'
// import './SmurfCard.css';
import {deleteSmurf} from '../actions';
import { connect } from 'react-redux';

class SmurfCard extends Component {
handleOnClick = (e) => {
    e.stopPropagation();
    this.props.deleteSmurf(this.props.index);
}
  render() {
    const { name, age, height } = this.props;
    return (
      <div className="card">
        <div className="card_left">
            <button 
              className="delete"
              onClick={this.handleOnClick}
            >Delete (below)</button>
        </div>
        <div className="card_right">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Height: {height}</p>
        </div>
      </div>
    )
  }
}

export default connect(null, {deleteSmurf})(SmurfCard);