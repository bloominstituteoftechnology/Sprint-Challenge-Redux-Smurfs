import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";
import Smurf from "./Smurf";
class SmurfList extends React.Component {
  componentDidMount() {
      this.props.fetchSmurfs();
  }
  render() {
    return (
      <div>
        {this.props.fetching ? (
          <h2>Please wait for smurfs</h2>
        ) : (
          <ul>
            {this.props.smurfs.map((smurf, index) => {
              return <Smurf key={smurf.name + index} name = {smurf.name} age = {smurf.age} height = {smurf.height} />
            })}
          </ul>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
    console.log(state);
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs
  };
};
export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(SmurfList);
