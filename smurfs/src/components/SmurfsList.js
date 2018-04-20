import React, { Component } from 'react';

class SmurfList extends Component {  
  render() {
    return (
      this.props.smurfs.map((smurf, i) => {
        return (
          <div className="smurf" key={i}>
            <h3 className="name">{smurf.name}</h3>
            <div className="age">{`Age: ${smurf.age}`}</div>
            <div className="height">{`Height: ${smurf.height} cm`}</div>
          </div>
        );
      })
    );
  }
}

export default SmurfList;