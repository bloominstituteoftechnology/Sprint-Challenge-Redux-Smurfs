import React, { Component } from 'react';
import { connect } from 'react-redux';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        {this.props.smurfs.map(smurf =>
          <div className="Smurfs__Smurf" key={smurf.id}>
            {smurf.name}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Smurfs);