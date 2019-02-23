import React from "react";
import { connect } from "react-redux";
import AddSmurf from "./AddSmurf";
import Smurf from "./Smurf";
import { getSmurfs } from "../actions/index";

const Wrapper = {
  width: '90%',
  margin: '10px auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center'
}


export class Village extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
   render() {
    return (
        <div>
          <h1>Smurf Village</h1>
          {!this.props.loading && this.props.error === '' ?<AddSmurf /> : null}
          {this.props.loading ? <h1>Loading Village...</h1> : null}
          {this.props.error !== "" ? <h1>{this.props.error}</h1> : null}
          <div style={Wrapper}>{this.props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}</div>
          
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