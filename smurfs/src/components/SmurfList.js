import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, updateSmurf, deleteSmurf } from '../actions';
import './App.css';

class SmurfList extends Component {
  state = {
    name: 'Saaaamm',
    age: 200,
    height: '5cm',
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="smurf__list">
        {console.log('just befoer the map, this.props(.smurfs)', this.props)}
        {this.props.smurfs.map((smurf, i) => {
          return (
            <ul className="smurf" key={i}>
              <li className="smurf__name">{smurf.name}</li>
              <li className="smurf__age">{smurf.age}</li>
              <li className="smurf__height">{smurf.height}</li>
              <button
                className="update__button"
                onClick={() => this.props.updateSmurf(this.state, smurf.id)}
              >
                Edit
              </button>
              <button
                className="delete__button"
                onClick={() => this.props.deleteSmurf(smurf, smurf.id)}
              >
                Delete
              </button>
            </ul>
          );
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

export default connect(mapStateToProps, { getSmurfs, updateSmurf, deleteSmurf })(SmurfList);
