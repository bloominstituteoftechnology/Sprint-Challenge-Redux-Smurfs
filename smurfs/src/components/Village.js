import React from "react";
import { connect } from "react-redux";
import AddSmurf from "./AddSmurf";
import Smurf from "./Smurf";
import { getSmurfs } from "../actions/index";


export class Village extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
   render() {
    return (
        <div>
          {this.props.loading ? <h1>Loading Village...</h1> : null}
          {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
          {this.props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
          {!this.props.loading && this.props.error === '' ?<AddSmurf /> : null}
        </div>
    );
  }
}
 const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    smurfs: state.smurfs
  };
};
 export default connect(
  mapStateToProps,
  { getSmurfs }
)(Village);