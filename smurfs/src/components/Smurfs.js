import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpdateSmurf from './UpdateSmurf';
import { deleteSmurf } from '../actions';




class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
    };
  }

  updateToggle = () => {
    const active = this.state.update;
    this.setState({ update: !active });
  };

  deleteSmurf = event => {
    event.preventDefault();
    const deleteIndex = {
      data: {
        index: this.props.index,
      },
    };
    this.props.deleteSmurf(deleteIndex);
  };

    render() {
    return (
      <div className="Smurfs">
        <div className="Smurf-box">
          <div className="Name">{this.props.smurf.name}</div>
          <div className="Age">Age:{this.props.smurf.age}</div>
          <div className="Email">Email: {this.props.smurf.email}</div>
          <button className="Update" onClick={this.updateToggle}>Update</button>
          <button className="Delete" onClick={this.deleteSmurf}>Delete</button>
          {this.state.update ? (
            <UpdateSmurf data={this.props.smurfs} index={this.props.index} />
          ) : null}
        </div> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { deleteSmurf })(Smurfs);