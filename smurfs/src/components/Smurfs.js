import React, { Component } from "react";
import { connect } from "react-redux";

import { getSmurfs, deleteSmurf, updateSmurf } from "../actions";

// import SmurfUpdate from "./SmurfUpdate";

class Smurfs extends Component {
    state = { 
    name: '',
    age: '',
    height: '' 
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  removeSmurf = id => {
    this.props.deleteSmurf({
      id: id
    });
    setTimeout(() => {
      this.props.getSmurfs();
    }, 2000);
  };


  // updateName = event => {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  // updateAge = event => {
  //   this.setState({
  //     age: event.target.value
  //   });
  // }

  // updateHeight = event => {
  //   this.setState({
  //     height: event.target.value
  //   });
  // }

  // editSmurf = event => id => {
  //   this.props.updateSmurf(id);
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  updateHandler = id => {
    if (this.checkSmurf()) {
      const updatedSmurf = {};

      for (let property in this.state) {
        if (this.state[property] !== this.props.smurf[property])
          updatedSmurf[property] = this.state[property];
      }

      this.props.updateSmurf(updatedSmurf);
    }
  };

  checkSmurf = _ => {
    return !Object.values(this.state).every(inp => inp === '');
  };

  render() {
    return (
      <div>
        {this.props.fetching ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <li className="smurf" key={smurf.id}>
                  <p name="name">{smurf.name}</p>
                  <p name="age">{smurf.age}</p>
                  <p name="height">{smurf.height}</p>
                  <p> id {smurf.id} </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, updateSmurf })(Smurfs);
