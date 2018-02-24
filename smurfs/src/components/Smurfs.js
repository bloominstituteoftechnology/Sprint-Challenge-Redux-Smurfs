import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="Smurf-Container">
        <ul className="Smurf-List">
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <ul>
                  <li>{`Name: ${smurf.name}`}</li>
                  <li>{`Age: ${smurf.age}`}</li>
                  <li>{`Height: ${smurf.height}`}</li>
                </ul>
              </div>
            )
          })}
        </ul>
      </div>
    )
    // return this.props.fetchingSmurfs ? (
    //   <h2>Loading...</h2>
    // ) : (
    //   this.props.smurfs.map((smurf, i) => {
    //     return (
    //       <div key={i}>
    //         <ul>
    //           <li>{`Name: ${smurf.name}`}</li>
    //           <li>{`Age: ${smurf.age}`}</li>
    //           <li>{`Height: ${smurf.height}`}</li>
    //         </ul>
    //       </div>
    //     );
    //   })
    // );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfsReducer.smurfs,
    fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
    error: state.smurfsReducer.error
  };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
