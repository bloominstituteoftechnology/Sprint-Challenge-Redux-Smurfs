import React from "react";
import { connect } from "react-redux";

import  SmurfList  from "../components/SmurfList";

import { fetchSmurf } from '../actions';

class SmurfListView extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.fetchSmurf();
    console.log(this.props)
  }

  render(){
    return(
      <div>
        {this.props.isFetching ? <h2> Loading Smurfs ... </h2> : <h1> Smurfs List </h1>}
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state.smurfs)
  return{
    smurfs: state.smurfs,
    isFetching: state.fetching
  }
}

export default connect(
  mapStateToProps, { fetchSmurf }
)(SmurfListView);
