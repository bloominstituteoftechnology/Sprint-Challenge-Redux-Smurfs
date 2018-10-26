import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import SmurfForm from "./SmurfForm.js"
// import actions

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    if (this.props.fetching) {
      return <h3>Fetching Friends ...</h3>
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
         {this.props.fetchingSmurfs ? (
          <div> Gathering All Your Smurfs </div>
        ) : (
          <div>
            {this.props.smurfs.map(smurfs => {
              return (
                <li key={smurfs.index}>
                  Name: {smurfs.name}, <br />
                  Age: {smurfs.age}, <br />
                  Height: {smurfs.height}, <br />
                </li>
              );
            })}
          </div>
        )}
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchSmurfs
  }
)(App);