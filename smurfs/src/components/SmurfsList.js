import React from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class SmurfsList extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div >
        {this.props.error ? <div>{this.props.error}</div> : null}
        {this.props.gettingSmurfs ? <div>{this.props.gettingSmurfs}</div> : null}
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          )
        })}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    gettingSmurfs: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps,{getSmurfs})(SmurfsList);