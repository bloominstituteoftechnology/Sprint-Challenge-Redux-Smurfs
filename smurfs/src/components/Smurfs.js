import React, { Component } from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSmurfs } from '../actions';
import { deleteSmurf } from '../actions';

class Smurfs extends Component {

componentDidMount() {
    this.props.getSmurfs();
}


deleteSmurf = id => {
  this.props.deleteSmurf(id);
};

  render() {
    return (
      <div className="Smurfs">
        <h1 className="Heading mt-3">Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              < i className="fas fa-trash mb-3" style={{cursor: 'pointer', color: '#428bca', fontSize: '28px'}} id={smurf.id} onClick={this.deleteSmurf}></ i>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

Smurfs.PropTypes = {
  smurfs: PropTypes.array.isRequired,
  getSmurfs: PropTypes.func.isRequired,
  deleteSmurf: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  smurfs: state.smurf.smurfs
});

// created an action file in index.js in actions folder that contain dispatchs to props

export default connect (mapStateToProps, {getSmurfs, deleteSmurf})(Smurfs);
