import React, { Component } from "react";
import { getsmurfs } from "../actions";
import { connect } from "react-redux";

class SmurfList extends Component {
  componentDidMount() {
    this.props.getsmurfs();
    console.log("smurfs", this.props.smurfs);
  }

  render() {
    return (
      <div>
        <h1>SmurfList</h1>
        {this.props.smurfs.map((smurf, i) => {
          return (
            <ul key={i}>
              <li>{smurf.name}</li>
              <li>{smurf.age}</li>
              <li>{smurf.height}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getsmurfs })(SmurfList);
